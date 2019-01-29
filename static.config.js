import React from 'react';
import nodePath from 'path';
import fs from 'fs';
import klaw from 'klaw';
import yaml from 'js-yaml';
import chokidar from 'chokidar';
import frontmatter from 'front-matter';
import { reloadRoutes, makePageRoutes } from 'react-static/node';

import { Renderer as MarkdownRenderer } from './src/utils/markdown';

import webpack from './webpack';

const NETLIFY_PATH = nodePath.resolve(__dirname, 'netlify');
const IS_PRODUCTION = process.env.RELEASE_STAGE === 'production';
const DEFAULT_PAGINATION_PAGE_SIZE = 10;

chokidar.watch(NETLIFY_PATH).on('all', () => reloadRoutes());

const slugify = title => {
  return title
    .toLowerCase()
    .trim() // Remove spaces
    .replace(/ /g, '-') // Connect words
    .replace(/(\/\/)+/g, '/') // Remove double slash
    .replace(/^\//, '') // Remove starting slash
    .replace(/\/$/, ''); // Remove trailing slash
};

const dataLoaders = {
  '.md': file => {
    const { attributes, body } = frontmatter(file);

    return {
      ...attributes,
      body: MarkdownRenderer(body),
    };
  },
  '.yaml': yaml.safeLoad,
};

const convertPropertiesToHTML = data => {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      if (typeof data[key] === 'object') {
        data[key] = convertPropertiesToHTML(data[key]);
      } else if (['description', 'markdown'].includes(key)) {
        data[key] = MarkdownRenderer(data[key]);
      }
    }
  }

  return data;
};

const getFile = (srcPath, extension = '.yaml') => {
  let data;

  try {
    data = dataLoaders[extension](fs.readFileSync(srcPath, 'utf8')) || {};
  } catch (e) {
    data = {};
    console.error('Error getFile:', srcPath, e);
  }

  const path = slugify(data.path || data.title || nodePath.basename(srcPath, 'yaml'));

  // Don't convert settings files
  if (!/settings\.yaml/.test(srcPath)) {
    data = convertPropertiesToHTML(data);
  }

  return {
    ...data,
    path: path ? `/${path}` : undefined,
  };
};

const getFiles = async (srcPath, extensions = ['.md', '.yaml']) => {
  const files = [];

  return new Promise((resolve, reject) => {
    if (!fs.existsSync(srcPath)) {
      resolve(files);
      return;
    }

    klaw(srcPath)
      .on('data', item => {
        const extension = nodePath.extname(item.path);

        if (!extensions.includes(extension)) {
          return;
        }

        files.push(getFile(item.path, extension));
      })
      .on('error', e => {
        console.error('Error getFiles:', srcPath, e);
        reject(e);
      })
      .on('end', () => {
        resolve(files);
      });
  });
};

const resolveMeta = (defaultMeta = {}, meta = {}) => {
  return {
    ...defaultMeta,
    ...meta,
    twitter: Object.assign({}, defaultMeta.twitter, meta.twitter),
    jld: Object.assign({}, defaultMeta.jld, meta.jld),
  };
};

let siteRoot = '';
if (IS_PRODUCTION) {
  siteRoot = 'https://stoplight.io';
}

const filterPages = (allPages, filter) => {
  const pages = []; // pages that pass the filter

  for (const page of allPages) {
    if (!filter(page)) {
      continue;
    }

    pages.push({
      title: page.title,
      color: page.color,
      subtitle: page.subtitle,
      image: page.image,
      href: page.path,
      tags: page.tags, // used to show which tag matches the search
      author: page.author,
      publishedDate: page.publishedDate,
      backgroundSize: page.backgroundSize,
    });
  }

  pages.sort((a, b) => {
    return new Date(a.publishedDate).getTime() < new Date(b.publishedDate).getTime() ? 1 : -1;
  });

  return pages;
};

const RELATED_PAGES_LIMIT = 3;
const addSubpages = (routes, allPages, subpages, propFactory) => {
  if (subpages.length) {
    subpages.forEach(subpage => {
      if (!subpage.path) {
        return;
      }

      let relatedPages = [];

      if (subpage.relatedTags && subpage.relatedTags.length) {
        // Grab pages with the same tag
        relatedPages = filterPages(allPages, page => {
          if (!page.tags || page.path === subpage.path) {
            return false;
          }

          for (const tag of subpage.relatedTags) {
            if (page.tags && page.tags.includes(tag)) {
              return true;
            }
          }

          return false;
        }).slice(0, RELATED_PAGES_LIMIT);
      }

      routes.push({
        path: subpage.path,
        component: 'src/containers/Subpage',
        getData: () => {
          return {
            ...subpage,
            ...(propFactory ? propFactory(subpage) : {}),
            relatedPages,
          };
        },
      });
    });
  }
};

const addListPages = (routes, allPages, listPages, propFactory) => {
  for (const list of listPages) {
    const items = filterPages(allPages, page => {
      return (page.tags && page.tags.includes(list.tag)) || (page.author && page.author.name === list.title);
    });

    // if pagination is enabled add page size
    let pageSize = items.length;
    if (list.pagination && list.pagination.enabled) {
      pageSize = list.pagination.perPage || DEFAULT_PAGINATION_PAGE_SIZE;
    }

    // Add route for List page
    routes.push({
      path: list.path,
      component: 'src/containers/Lists',
      getData: () => ({
        ...list,
        ...(propFactory ? propFactory(list) : {}),
        items: items.slice(0, pageSize),
        pagination: {
          ...list.pagination,
          path: list.path,
          currentPage: 1,
          totalPages: Math.ceil(items.length / pageSize),
        },
      }),
    });

    // Add routes for List pagination pages
    if (list.pagination && list.pagination.enabled && items.length > pageSize) {
      routes.push(
        ...makePageRoutes({
          items,
          pageSize,
          pageToken: 'page',
          route: {
            path: list.path,
            component: 'src/containers/Lists',
          },
          decorate: (item, currentPage, totalPages) => ({
            getData: () => ({
              ...list,
              ...(propFactory ? propFactory(list) : {}),
              items: items.slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize),
              pagination: {
                ...list.pagination,
                path: list.path,
                currentPage,
                totalPages,
              },
            }),
          }),
        })
      );
    }
  }
};

export default {
  siteRoot,

  getSiteData: () => getFile(`${NETLIFY_PATH}/settings.yaml`),

  getRoutes: async () => {
    let [
      home,
      pricing,
      about,
      forms = [],

      lists = [],
      authors = [],

      landings = [],
      caseStudies = [],
      blogPosts = [],
      other = [],
    ] = await Promise.all([
      getFile(`${NETLIFY_PATH}/pages/home.yaml`),
      getFile(`${NETLIFY_PATH}/pages/pricing.yaml`),
      getFile(`${NETLIFY_PATH}/pages/about.yaml`),
      getFiles(`${NETLIFY_PATH}/forms`),

      getFiles(`${NETLIFY_PATH}/lists`),
      getFiles(`${NETLIFY_PATH}/authors`),

      getFiles(`${NETLIFY_PATH}/landings`),
      getFiles(`${NETLIFY_PATH}/case-studies`, ['.md']),
      getFiles(`${NETLIFY_PATH}/blog-posts`, ['.md']),
      getFiles(`${NETLIFY_PATH}/subpages`, ['.md']),
    ]);

    const routes = [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => home,
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
      {
        path: pricing.path,
        component: 'src/containers/Pricing',
        getData: () => pricing,
      },
      {
        path: about.path,
        component: 'src/containers/About',
        getData: () => about,
      },
    ];

    // Override the image positioning for list views
    caseStudies = caseStudies.map(caseStudy => ({ ...caseStudy, backgroundSize: 'contain' }));

    // add author to pages and remove pages without a path
    const pages = [...landings, ...caseStudies, ...blogPosts, ...other].filter(page => {
      if (page.path) {
        const authorPage = authors.find(author => author.title === page.author);

        if (authorPage) {
          page.author = {
            name: authorPage.title,
            path: authorPage.path,
            image: authorPage.image,
          };
        }

        return page.path;
      }
    });

    addListPages(routes, pages, lists);
    addListPages(routes, pages, authors, props => ({
      hero: {
        aligned: 'left',
      },
    }));

    addSubpages(routes, pages, blogPosts, props => {
      return {
        breadCrumbs: [{ title: 'Home', path: '/' }, { title: 'Blog', path: '/blog' }, { title: props.title }],
        hero: {
          aligned: 'left',
        },
        meta: {
          ...props.meta,
          jld: {
            breadCrumbs: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, item: { '@id': 'https://stoplight.io/', name: 'Home' } },
                { '@type': 'ListItem', position: 2, item: { '@id': 'https://stoplight.io/blog/', name: 'Blog' } },
                {
                  '@type': 'ListItem',
                  position: 3,
                  item: {
                    '@id': `https://stoplight.io/${props.path}`,
                    name: props.title,
                  },
                },
              ],
            }),
            article: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NewsArticle',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `https://stoplight.io/blog/${props.path}`,
              },
              headline: props.title,
              image: [props.image],
              datePublished: props.publishDate,
              dateModified: props.modifiedDate,
              author: { '@type': 'Person', name: props.author ? props.author.name : null },
              publisher: {
                '@type': 'Organization',
                name: 'Stoplight',
                logo: {
                  '@type': 'ImageObject',
                  url:
                    'https://d33wubrfki0l68.cloudfront.net/c2cb23ce44d9046f897d797e33ca21c52be6ebd1/63887/images/robot-dude.svg',
                },
              },
              description: props.subtitle,
            }),
          },
        },
      };
    });

    addSubpages(routes, pages, caseStudies, props => {
      const sidebar = props.sidebar || {};
      sidebar.info = sidebar.info || {};
      sidebar.info.image = props.image;

      return {
        pageName: 'Case Study',
        sidebar,
        hero: {
          skew: '3deg',
          aligned: 'left',
        },
      };
    });

    addSubpages(routes, pages, other);

    if (forms.length) {
      forms.forEach(form => {
        if (!form.path) {
          return;
        }

        routes.push({
          path: form.path,
          component: 'src/containers/Form',
          getData: () => form,
        });
      });
    }

    if (landings.length) {
      landings.forEach(landing => {
        if (!landing.path) {
          return;
        }

        routes.push({
          path: landing.path,
          component: 'src/containers/Landing',
          getData: () => landing,
        });
      });
    }

    // Don't include admin route in production
    if (!IS_PRODUCTION) {
      routes.push({
        path: '/admin',
        component: 'src/containers/Admin',
        getData: () => {
          return {
            header: null,
            footer: null,
          };
        },
      });
    }

    return routes;
  },

  Document: ({ Html, Head, Body, children, routeInfo, siteData }) => {
    const { integrations, info } = siteData;
    const { intercom, hubspot, googleTagManager } = integrations;

    const routeData = (routeInfo && routeInfo.allProps) || {};
    const { pagination = {}, meta: routeMeta, path } = routeData;

    const meta = resolveMeta(siteData.meta, routeMeta);
    const { jld } = meta;

    const companyInfo = JSON.stringify({
      '@context': 'http://schema.org/',
      '@type': 'Corporation',
      address: {
        '@type': 'PostalAddress',
        ...info.address,
      },
      email: info.email,
    });

    let robots = 'noindex, nofollow';
    if (IS_PRODUCTION) {
      robots = meta.robots || 'index, follow';
    }

    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content={robots} />

          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />

          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:url" content={meta.url} />
          <meta property="og:site_name" content="stoplight.io" />
          <meta property="og:image" content={siteRoot + meta.image} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={meta.twitter.username} />
          <meta name="twitter:creator" content={meta.twitter.username} />
          <meta name="twitter:title" content={meta.twitter.title} />
          <meta name="twitter:description" content={meta.twitter.description} />
          <meta name="twitter:image" content={siteRoot + meta.twitter.image} />

          <link rel="shortcut icon" href={meta.favicon} type="image/x-icon" />

          {!IS_PRODUCTION && (
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `window.CMS_MANUAL_INIT = true;`,
              }}
            />
          )}

          {IS_PRODUCTION && googleTagManager && (
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${googleTagManager}');`,
              }}
            />
          )}

          {IS_PRODUCTION && <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />}

          {IS_PRODUCTION && intercom && (
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
                  window.intercomSettings = {
                    app_id: "${intercom}"
                  };
                  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${intercom}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()`,
              }}
            />
          )}

          {pagination.currentPage && pagination.currentPage !== 1 && (
            <link rel="prev" href={`${siteRoot}${path}/page/${pagination.currentPage - 1}/`} />
          )}

          {pagination.currentPage && pagination.currentPage !== pagination.totalPages && (
            <link rel="next" href={`${siteRoot}${path}/page/${pagination.currentPage + 1}/`} />
          )}
        </Head>
        <Body>
          {IS_PRODUCTION && googleTagManager && (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${googleTagManager}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          )}
          {children}

          {IS_PRODUCTION && hubspot && (
            <script
              type="text/javascript"
              id="hs-script-loader"
              async
              defer
              src={`//js.hs-scripts.com/${hubspot}.js`}
            />
          )}

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: companyInfo }} />

          {jld.breadCrumbs && (
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: meta.jld.breadCrumbs }} />
          )}

          {jld.article && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: meta.jld.article }} />}
        </Body>
      </Html>
    );
  },

  webpack,

  onBuild: () => {
    // Don't allow crawlling of any pages
    let robots = 'User-agent: *\nDisallow: /';

    if (IS_PRODUCTION) {
      // Don't allow crawlling of /lp pages
      robots = `User-agent: *\nDisallow: /lp\nSitemap: ${siteRoot}/sitemap.xml`;
    }

    fs.writeFileSync(`${process.cwd()}/dist/robots.txt`, robots);
  },

  // bundleAnalyzer: true,
};
