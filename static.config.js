import React from 'react';
import nodePath from 'path';
import fs from 'fs';
import klaw from 'klaw';
import yaml from 'js-yaml';
import chokidar from 'chokidar';
import frontmatter from 'front-matter';
import { reloadRoutes } from 'react-static/node';

import { Renderer as MarkdownRenderer } from './src/utils/markdown';

import webpack from './webpack';

const NETLIFY_PATH = nodePath.resolve(__dirname, 'netlify');
const IS_PRODUCTION = process.env.RELEASE_STAGE === 'production';

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

const convertDescriptionsToHTML = data => {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      if (typeof data[key] === 'object') {
        data[key] = convertDescriptionsToHTML(data[key]);
      } else if (key === 'description') {
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

  // Don't convert markdown or settings files
  if (extension !== '.md' && !/settings\.yaml/.test(srcPath)) {
    data = convertDescriptionsToHTML(data);
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
  };
};

let siteRoot = '';
if (IS_PRODUCTION) {
  siteRoot = 'https://stoplight.io';
}

export default {
  siteRoot,

  getSiteData: () => getFile(`${NETLIFY_PATH}/settings.yaml`),

  getRoutes: async () => {
    const [
      home,
      pricing,
      about,
      caseStudyConfig,

      forms = [],
      caseStudies = [],

      landings = [],
      subpages = [],
    ] = await Promise.all([
      getFile(`${NETLIFY_PATH}/pages/home.yaml`),
      getFile(`${NETLIFY_PATH}/pages/pricing.yaml`),
      getFile(`${NETLIFY_PATH}/pages/about.yaml`),
      getFile(`${NETLIFY_PATH}/pages/case-studies.yaml`),

      getFiles(`${NETLIFY_PATH}/hubspot`),
      getFiles(`${NETLIFY_PATH}/case-studies`, ['.md']),

      getFiles(`${NETLIFY_PATH}/landings`),
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
      {
        path: caseStudyConfig.path,
        component: 'src/containers/CaseStudies',
        getData: () => ({
          ...caseStudyConfig,
          caseStudies: caseStudies
            .map(caseStudy => {
              if (!caseStudy.path) {
                return;
              }

              const { hero = {}, info = {} } = caseStudy;

              return {
                title: info.name,
                description: hero.subtitle,
                logo: info.logo,
                href: caseStudyConfig.path + caseStudy.path,
              };
            })
            .filter(Boolean),
        }),
        children: caseStudies
          .map((caseStudy, index) => {
            if (!caseStudy.path) {
              return;
            }

            return {
              path: caseStudy.path,
              component: 'src/containers/CaseStudy',
              getData: () => ({
                ...caseStudy,
                next: caseStudies[index + 1 >= caseStudies.length ? 0 : index + 1],
                prev: caseStudies[index - 1 <= caseStudies.length ? caseStudies.length - 1 : index - 1],
              }),
            };
          })
          .filter(Boolean),
      },
    ];

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

    if (subpages.length) {
      subpages.forEach(subpage => {
        if (!subpage.path) {
          return;
        }

        routes.push({
          path: subpage.path,
          component: 'src/containers/Subpage',
          getData: () => subpage,
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

    const meta = resolveMeta(siteData.meta, routeInfo && routeInfo.allProps.meta);

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
