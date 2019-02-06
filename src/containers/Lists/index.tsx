import * as React from 'react';
import { withRouteData } from 'react-static';

import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Hero, IHero, IHeroAuthor } from 'src/components/Hero';
import { Image } from 'src/components/Image';
import { Link } from 'src/components/Link';
import { IPagination, Pagination } from 'src/components/Pagination';
import { Section } from 'src/components/Section';
import { ITab } from 'src/components/Tabs';

export interface IListItem {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  author: IHeroAuthor;
  publishedDate: string;
  backgroundSize?: 'cover' | 'contain';
}

export interface IList {
  color: string;
  title: string;
  subtitle: string;
  pageName?: string;
  tabs: ITab[];
  items: IListItem[];
  hero: Partial<IHero>;
  actionBar?: IActionBar;
  pagination?: IPagination;
}

export const ListItem: React.FunctionComponent<IListItem> = ({
  title,
  subtitle,
  image,
  href,
  author,
  publishedDate,
  backgroundSize = 'cover',
}) => {
  return (
    <Link
      to={href}
      className="block shadow bg-grey-lightest rounded-lg text-grey-darkest hover:bg-grey-lighter my-12 overflow-hidden"
      style={{
        height: 280,
      }}
    >
      <article className="flex box h-full w-full items-center">
        <div
          className="h-full w-2/5 sm:w-1/5"
          style={{
            backgroundImage: image ? `url(${image})` : 'none',
            backgroundSize,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="flex-1 flex flex-col h-full p-10 md:p-6">
          <div className="flex-1 mb-2 flex flex-col relative overflow-hidden">
            <div className="text-3xl font-bold mb-4">{title}</div>

            {subtitle && <p className="leading-loose">{subtitle}</p>}
          </div>

          <div className="flex items-end">
            <div className="flex-1">
              <div className="bg-green inline-block text-white font-bold py-2 px-8 rounded hover:opacity-93">Read</div>
            </div>

            {author && (
              <div className="flex items-center md:hidden">
                {author.image && <Image className="mr-2 rounded-full h-16 w-16" src={author.image} alt={author.name} />}

                <div className="text-sm">
                  {author.name && <div>{author.name}</div>}
                  {publishedDate && <div>{publishedDate}</div>}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export const List: React.FunctionComponent<IList> = ({
  color,
  title,
  subtitle,
  pageName,
  tabs,
  items,
  hero,
  actionBar,
  pagination,
}) => {
  return (
    <React.Fragment>
      <Hero {...hero} bgColor={color} title={title} subtitle={subtitle} pageName={pageName} tabs={tabs} />

      <Section className="z-5 pt-24 md:pt-0" noPadding>
        {items && items.length > 0 ? (
          <React.Fragment>
            <div className="container">
              {items.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
            </div>

            {pagination && <Pagination {...pagination} color={color} />}
          </React.Fragment>
        ) : (
          <div className="container">
            <div className="text-center p-12 sm:p-4 text-white opacity-75" />
          </div>
        )}
      </Section>

      {actionBar && (
        <div className="md:pb-24 pb-40 mt-32">
          <ActionBar className="bg-white" {...actionBar} />
        </div>
      )}
    </React.Fragment>
  );
};

export default withRouteData(List);
