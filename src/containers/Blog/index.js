import React from 'react';
import { withRouteData } from 'react-static';

import Hero from '@components/Hero';
import ActionBar from '@components/ActionBar';
import Pagination from '@components/Pagination';
import Link from '@components/Link';

const BlogPost = ({ title, description, logo, href }) => {
  return (
    <Link
      to={href}
      className="block flex sm:flex-col items-center shadow bg-grey-lightest p-12 sm:p-4 rounded-lg text-grey-darkest hover:bg-grey-lighter"
    >
      <div className="pr-20 sm:pr-0 sm:pb-4 max-w-full">
        <img src={logo} alt={title} className="max-w-xs" />
      </div>

      <div className="flex-1">
        <h1 className="mb-4">{title}</h1>

        <p className="mb-10 leading-loose" dangerouslySetInnerHTML={{ __html: description }} />

        <div className="bg-green inline-block text-white font-bold py-2 px-8 rounded hover:opacity-93">
          Read
        </div>
      </div>
    </Link>
  );
};

class Blog extends React.Component {
  render() {
    const { color, hero = {}, actionBar = {}, pagination = {}, blogPosts = [] } = this.props;

    return (
      <div>
        <Hero bgColor={color} {...hero} containerClassName="pb-24" />

        {blogPosts.length ? (
          <section className="relative z-5" style={{ marginTop: -125 }}>
            <div className="container">
              {blogPosts.map((post, index) => (
                <div key={index} className="mb-12">
                  <BlogPost {...post} />
                </div>
              ))}
            </div>

            {pagination && pagination.enabled ? (
              <div className="container text-right">
                <Pagination {...pagination} />
              </div>
            ) : null}

            {actionBar && actionBar.enabled ? (
              <div className="md:pb-24 pb-40 mt-32">
                <ActionBar className="bg-white" {...actionBar} />
              </div>
            ) : null}
          </section>
        ) : null}
      </div>
    );
  }
}

export default withRouteData(Blog);
