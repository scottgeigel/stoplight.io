import React from 'react';
import { withRouteData } from 'react-static';

import Hero from '@components/Hero';
import ActionBar from '@components/ActionBar';
import Link from '@components/Link';

/**
 * QUOTES
 */

const Quotes = ({ quotes = [] }) => {
  if (!quotes.length) {
    return null;
  }

  return quotes.map((quote, index) => {
    return <Quote key={index} {...quote} />;
  });
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

/**
 * INFO
 */

const Info = ({ name, logo, description, items = [] }) => {
  if (!logo && !name && !description && !items.length) return null;

  return (
    <div className="p-8 rounded bg-white shadow">
      {(logo || name) && (
        <div className="text-center">
          <div className="p-8">{logo ? <img src={logo} alt={name} /> : <h1>{name}</h1>}</div>
        </div>
      )}

      {description && <div className="pt-4">{description}</div>}

      {items.length && (
        <div className="pt-4">
          {items.map((item, index) => (
            <InfoItem key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

const InfoItem = ({ name, value, href }) => {
  if (!value && !href) {
    return null;
  }

  return (
    <div className="flex pb-2">
      {name && <div className="w-1/3 font-bold">{name}:</div>}

      {href ? <Link to={href}>{value || href}</Link> : <div>{value}</div>}
    </div>
  );
};

/**
 * SUBPAGE
 */

function Subpage({ hero, body, info = {}, quotes, actionBar }) {
  const { name, logo, description, items: infoItems = [] } = info;

  const hasSidebar = logo || name || description || infoItems.length || quotes.length;

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

export default withRouteData(Subpage);
