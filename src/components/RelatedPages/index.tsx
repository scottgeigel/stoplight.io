import * as cn from 'classnames';
import * as React from 'react';

import { Container } from 'src/components/Container';
import { Link } from 'src/components/Link';
import { Section } from 'src/components/Section';

export interface IRelatedPage {
  href: string;
  title?: string;
  subtitle?: string;
  image?: string;
  color?: string;
  publishedDate?: string;
  tag: string;
  backgroundSize: 'cover' | 'contain';
}

export const ArticleCard: React.FunctionComponent<IRelatedPage> = ({
  href,
  title,
  subtitle,
  image,
  color = 'black',
  publishedDate,
  tag,
  backgroundSize = 'cover',
}) => {
  return (
    <Link to={href}>
      <article className="flex flex-col shadow bg-white rounded-lg w-full h-full text-grey-darkest overflow-hidden">
        <div
          className={cn('h-40 w-100 relative', { [`bg-${color}`]: !image })}
          style={{
            backgroundImage: image ? `url(${image})` : 'none',
            backgroundSize,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="flex flex-col flex-1 p-4 ">
          <h3 className="mb-2">{title}</h3>

          <p className="flex-1 mb-4">{subtitle}</p>

          <div className="flex text-sm text-grey-darker">
            {publishedDate && <p>{publishedDate}</p>}

            <div className="flex-1 text-right text-muted font-bold">{tag}</div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export const RelatedPages: React.FunctionComponent<{ pages: IRelatedPage[]; title?: string }> = ({ pages, title }) => {
  if (!pages || !pages.length) return null;

  return (
    <Section id="related-pages" className="bg-grey-lightest">
      <Container title={title || 'Related Articles'} className="text-grey-darkest">
        <div className="flex justify-center flex-wrap -mb-12">
          {pages.map((page, key) => {
            return (
              <div key={key} className="sm:w-full w-1/3 px-6 mb-12">
                <ArticleCard {...page} />
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
