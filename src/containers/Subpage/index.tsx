import * as React from 'react';
import { withRouteData } from 'react-static';

import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Container } from 'src/components/Container';
import { Hero, IHero, IHeroAuthor } from 'src/components/Hero';
import { IInfo, Info } from 'src/components/Info';
import { IQuote, Quote } from 'src/components/Quote';

export interface IPage {
  hero: IHero;
  body: string;
  info?: IInfo;
  quotes?: IQuote[];
  actionBar?: IActionBar;
  author?: IHeroAuthor;
}

export const Subpage: React.FunctionComponent<IPage> = ({ hero, body, info, quotes, actionBar, author }) => {
  const hasSidebar = (info && (info.image || info.title || info.description)) || (quotes && quotes.length);

  return (
    <React.Fragment>
      <Hero {...hero} author={author} />

      <Container className="mx-auto my-24">
        <div className="relative">
          {hasSidebar && (
            <div className="-mt-40 ml-12 mb-12 w-1/3 md:mt-0 md:ml-0 md:mb-24 md:w-full float-right md:float-none">
              {info && <Info {...info} />}

              {quotes && quotes.length > 0
                ? quotes.map((quote, index) => {
                    return <Quote key={index} {...quote} />;
                  })
                : null}
            </div>
          )}

          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </Container>

      {actionBar && <ActionBar className="my-24" {...actionBar} />}
    </React.Fragment>
  );
};

export default withRouteData(Subpage);
