import cn from 'classnames';
import { DiscussionEmbed } from 'disqus-react';
import * as React from 'react';
import { withRouteData } from 'react-static';

import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { ICallToAction } from 'src/components/CallToAction';
import { Container } from 'src/components/Container';
import { Hero, IHero, IHeroBreadCrumb } from 'src/components/Hero';
import { IHeroAuthor } from 'src/components/Hero/HeroAuthor';
import { Image } from 'src/components/Image';
import { IInfo, Info } from 'src/components/Info';
import { IQuote, Quote } from 'src/components/Quote';
import { IRelatedPage, RelatedPages } from 'src/components/RelatedPages';
import { Section } from 'src/components/Section';
import { ITab } from 'src/components/Tabs';
import { convertMarkdownToHTML } from 'src/utils/markdown/index.js';

export interface IPage {
  path: string;
  title: string;
  subtitle: string;
  className?: string;
  pageName?: string;
  breadCrumbs?: IHeroBreadCrumb[];
  body: string;
  bodyImage?: string;
  author?: IHeroAuthor;
  publishedDate?: string;
  color?: string;
  hero: Partial<IHero>;
  cta?: ICallToAction;
  actionBar?: IActionBar;
  sidebar?: {
    info?: IInfo;
    quotes?: IQuote[];
  };
  relatedPages?: IRelatedPage[];
  disqus?: { enabled: boolean };
  tabs?: ITab[];
  includeToc?: boolean;
}

/**
 * SUBPAGE
 */

export const Subpage: React.FunctionComponent<IPage> = ({
  className,
  path,
  title,
  subtitle,
  pageName,
  breadCrumbs,
  body,
  bodyImage,
  author,
  publishedDate,
  color,
  hero,
  cta,
  sidebar,
  actionBar,
  relatedPages,
  disqus,
  tabs,
  includeToc = true,
}) => {
  const heroProps: IHero = {
    ...hero,
    title,
    subtitle,
    pageName,
    cta,
    bgColor: color,
    breadCrumbs,
  };

  if (author && author.name) {
    heroProps.author = { ...author, meta: publishedDate };
  }

  let url = path;
  let showDisqus = disqus && disqus.enabled;
  if (typeof window !== 'undefined') {
    url = window.location.origin + path;
    // @ts-ignore
    showDisqus = showDisqus && !window.CMS;
  }

  const html = convertMarkdownToHTML(body, { includeToc: !sidebar && includeToc });

  return (
    <React.Fragment>
      <Hero {...heroProps} tabs={tabs} />

      <Section noPadding>
        <Container className="mx-auto my-24">
          <div className="relative">
            {sidebar && (
              <div className="-mt-40 ml-12 mb-12 w-1/3 md:mt-0 md:ml-0 md:mb-24 md:w-full float-right md:float-none">
                {sidebar.info ? <Info {...sidebar.info} /> : null}

                {sidebar.quotes && sidebar.quotes.length
                  ? sidebar.quotes.map((quote, index) => {
                      return <Quote key={index} {...quote} />;
                    })
                  : null}
              </div>
            )}

            {bodyImage && (
              <div
                className="text-center"
                style={{
                  marginTop: -120,
                }}
              >
                <Image className="rounded-lg shadow bodyImage" src={bodyImage} alt={bodyImage} />
              </div>
            )}

            <div
              className={cn('markdown-body pt-10', className, { 'm-auto': !sidebar && !includeToc })}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </Container>
      </Section>

      {actionBar && <ActionBar className="my-24" {...actionBar} />}

      {relatedPages && relatedPages.length ? <RelatedPages pages={relatedPages} /> : null}

      {showDisqus && (
        <div className="container my-10">
          <DiscussionEmbed
            shortname="stoplight-io"
            config={{
              url,
              identifier: url,
              title,
            }}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default withRouteData(Subpage);
