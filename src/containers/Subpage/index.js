import React from 'react';
import cn from 'classnames';
import { withRouteData } from 'react-static';

import Hero from '@components/Hero';
import ActionBar from '@components/ActionBar';
import Link from '@components/Link';

import '@styles/markdown.scss';
import '@styles/highlight.scss';

const Info = ({ image, title, description, links }) => {
  if (!image && !title && !name && !description && (!links || !links.length)) {
    return null;
  }

  return (
    <div className="p-8 rounded bg-white shadow">
      {(image || title) && (
        <div className="text-center text-xl font-bold">
          <div className="p-4">{image ? <img src={image} alt={title} /> : <div>{title}</div>}</div>
        </div>
      )}

      {description && <div className="pt-4">{description}</div>}

      {links && links.length && (
        <ul className="pt-4">
          {links.map((link, index) => (
            <li className="py-2" key={index}>
              <Link to={link.href}>{link.title || link.href}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Quote = ({ quote, author, role }) => {
  return (
    <div className="mt-8 p-8 shadow rounded bg-grey-lighter relative">
      <p className="leading-loose pb-6 italic text-lg">{`"${quote}"`}</p>

      {(author || role) && (
        <div className="font-bold">
          <div className="pb-1 uppercase text-green">{author}</div>
          <div>{role}</div>
        </div>
      )}
    </div>
  );
};

const Quotes = ({ quotes }) => {
  if (!quotes || !quotes.length) return null;

  return quotes.map((quote, index) => {
    return <Quote key={index} {...quote} />;
  });
};

class Subpage extends React.Component {
  render() {
    const { hero, body, info, quotes, actionBar } = this.props;

    let hasSidebar = quotes && quotes.length;

    if (!hasSidebar && info) {
      const { image, title, description, links } = info;
      hasSidebar = image || title || description || (links && links.length);
    }

    const elems = [];

    if (hero) {
      elems.push(<Hero key="hero" {...hero} />);
    }

    elems.push(
      <div key="content" className="container mx-auto my-24">
        <div className="relative">
          {hasSidebar && (
            <div className="-mt-40 ml-12 mb-12 w-1/3 md:mt-0 md:ml-0 md:mb-24 md:w-full float-right md:float-none">
              <Info {...info} />
              <Quotes quotes={quotes} />
            </div>
          )}

          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>
    );

    if (actionBar) {
      elems.push(<ActionBar key="actionBar" className="my-24" {...actionBar} />);
    }

    return elems;
  }
}

export default withRouteData(Subpage);
