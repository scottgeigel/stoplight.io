import * as React from 'react';
import { withRouteData } from 'react-static';

import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Container } from 'src/components/Container';
import { Hero, IHero } from 'src/components/Hero';
import { IInfo, Info } from 'src/components/Info';
import { IQuote, Quote } from 'src/components/Quote';

export interface IPage {
  hero: IHero;
  body: string;
  info: IInfo;
  quotes: IQuote[];
  actionBar: IActionBar;
}

export const Subpage: React.FunctionComponent<IPage> = ({ hero, body, info, quotes, actionBar }) => {
  const { title, image, description, items } = info;

  const hasSidebar = image || title || description || items.length || quotes.length;

  return (
    <React.Fragment>
      <Hero {...hero} />

      <Container className="mx-auto my-24">
        <div className="relative">
          {hasSidebar && (
            <div className="-mt-40 ml-12 mb-12 w-1/3 md:mt-0 md:ml-0 md:mb-24 md:w-full float-right md:float-none">
              <Info {...info} />

              {quotes &&
                quotes.length > 0 &&
                quotes.map((quote, index) => {
                  return <Quote key={index} {...quote} />;
                })}
            </div>
          )}

          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </Container>

      <ActionBar key="actionBar" className="my-24" {...actionBar} />
    </React.Fragment>
  );
};

export default withRouteData(Subpage);
