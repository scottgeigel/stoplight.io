import * as React from 'react';
import { withRouteData } from 'react-static';

import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Hero, IHero } from 'src/components/Hero';
import { Link } from 'src/components/Link';
import { IPagination, Pagination } from 'src/components/Pagination';

export interface IListItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface IList {
  color: string;
  hero: IHero;
  items: IListItem[];
  actionBar?: IActionBar;
  pagination?: IPagination;
}

export const ListItem: React.FunctionComponent<IListItem> = ({ title, description, image, href }) => {
  return (
    <Link
      to={href}
      className="block flex sm:flex-col items-center shadow bg-grey-lightest p-12 sm:p-4 rounded-lg text-grey-darkest hover:bg-grey-lighter"
    >
      <div className="pr-20 sm:pr-0 sm:pb-4 max-w-full">
        <img src={image} alt={title} className="max-w-xs" />
      </div>

      <div className="flex-1">
        <h1 className="mb-4">{title}</h1>

        <p className="mb-10 leading-loose" dangerouslySetInnerHTML={{ __html: description }} />

        <div className="bg-green inline-block text-white font-bold py-2 px-8 rounded hover:opacity-93">Read</div>
      </div>
    </Link>
  );
};

export const List: React.FunctionComponent<IList> = ({ color, hero, actionBar, pagination, items }) => {
  return (
    <div>
      <Hero bgColor={color} {...hero} containerClassName="pb-24" />

      <section className="relative z-5" style={{ marginTop: -125 }}>
        {items && items.length > 0 ? (
          <React.Fragment>
            <div className="container">
              {items.map((item, index) => (
                <div key={index} className="mb-12">
                  <ListItem {...item} />
                </div>
              ))}
            </div>

            {pagination && <Pagination {...pagination} />}
          </React.Fragment>
        ) : (
          <div className="container">
            <div className="text-center p-12 sm:p-4 text-grey-darkest">
              <h2 className="">Coming soon...</h2>
            </div>
          </div>
        )}
      </section>

      {actionBar && (
        <div className="md:pb-24 pb-40 mt-32">
          <ActionBar className="bg-white" {...actionBar} />
        </div>
      )}
    </div>
  );
};

export default withRouteData(List);
