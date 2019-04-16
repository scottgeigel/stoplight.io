import * as React from 'react';

import { Container, IContainer } from 'src/components/Container';
import { Image } from 'src/components/Image';
import { ISection, Section } from 'src/components/Section';

export interface IQuote {
  image: string;
  quote: string;
  author: string;
  role: string;
}

export interface IBusinesses {
  id: ISection['id'];
  quotes: IQuote[];
  title?: IContainer['title'];
  cta?: IContainer['cta'];
}

export const Quote = ({ image, quote, author, role }) => {
  return (
    <div className="py-8 px-4 shadow bg-white rounded-lg flex flex-col justify-between">
      <div className="px-2 py-2 pb-8 flex justify-center items-start m-auto">
        <Image className="max-h-50" {...image} size="sm" />
      </div>
      <p className="leading-loose pb-6">{quote}</p>

      <div className="font-bold pb-1 uppercase text-blue">{author}</div>

      <div>{role}</div>
    </div>
  );
};

export const Businesses: React.FunctionComponent<IBusinesses> = ({ id, title, quotes, cta }) => {
  if (!quotes || !quotes.length) return null;

  return (
    <Section id={id}>
      <Container title={title} cta={cta}>
        <div className="flex justify-center flex-wrap -mb-12">
          {quotes.map((item, key) => {
            return (
              <div key={key} className="flex md:w-full w-1/3 px-6 mb-12">
                <Quote {...item} />
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
