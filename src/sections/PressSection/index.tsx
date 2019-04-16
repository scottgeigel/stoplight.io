import * as React from 'react';

import { Container, IContainer } from 'src/components/Container';
import { Image } from 'src/components/Image';
import { ISection, Section } from 'src/components/Section';

export interface IPress {
  image: string;
  date: string;
  description: string;
  publication: string;
  href: string;
}

export interface IPressSection {
  id: ISection['id'];
  articles: IPress[];
  title?: IContainer['title'];
  cta?: IContainer['cta'];
}

export const Press = ({ image, date, description, publication, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="pb-6 px-6 shadow bg-white rounded-lg text-grey-darker cursor-pointer hover:bg-grey-lightest"
    >
      <div className="flex items-center justify-center items-start h-32">
        <Image src={image} alt={publication} size="sm" />
      </div>

      <div className="uppercase font-bold mb-3">{date}</div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </a>
  );
};

export const PressSection: React.FunctionComponent<IPressSection> = ({ id, title, articles, cta }) => {
  if (!articles || !articles.length) return null;

  return (
    <Section id={id}>
      <Container title={title} cta={cta}>
        <div className="flex justify-center flex-wrap -mb-12">
          {articles.map((item, key) => {
            return (
              <div key={key} className="flex md:w-full w-1/4 px-6 mb-12">
                <Press {...item} />
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
