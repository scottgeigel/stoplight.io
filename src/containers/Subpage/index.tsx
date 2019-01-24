import * as React from 'react';
import { withRouteData } from 'react-static';

import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { ICallToAction } from 'src/components/CallToAction';
import { Container } from 'src/components/Container';
import { Hero, IHero, IHeroAuthor } from 'src/components/Hero';
import { IInfo, Info } from 'src/components/Info';
import { IQuote, Quote } from 'src/components/Quote';
import { IRelatedPage, RelatedPages } from 'src/components/RelatedPages';
import { Section } from 'src/components/Section';

import { DiscussionEmbed } from 'disqus-react';

export interface IPage {
  path: string;
  title: string;
  subtitle: string;
  pageName?: string;
  body: string;
  author?: IHeroAuthor;
  publishedDate?: string;
  image?: string;
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
}

/**
 * SUBPAGE
 */

export const Subpage: React.FunctionComponent<IPage> = ({
  path,
  title,
  subtitle,
  pageName,
  body,
  author = {},
  publishedDate,
  color,
  hero,
  cta,
  sidebar,
  actionBar,
  relatedPages,
  disqus,
}) => {
  const heroProps: IHero = {
    ...hero,
    title,
    subtitle,
    pageName,
    author: { ...author, meta: publishedDate },
    cta,
    bgColor: color,
  };

  return (
    <React.Fragment>
      <Hero {...heroProps} />

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

            <div className="markdown-body" dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        </Container>
      </Section>

      {actionBar && <ActionBar className="my-24" {...actionBar} />}

      {relatedPages && relatedPages.length ? <RelatedPages pages={relatedPages} /> : null}

      {disqus && disqus.enabled && (
        <div className="container my-10">
          <DiscussionEmbed
            shortname={'stoplight-io'}
            config={{
              url: `${window.location.origin}${path}`,
              identifier: `${window.location.origin}${path}`,
              title: path,
            }}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default withRouteData(Subpage);
