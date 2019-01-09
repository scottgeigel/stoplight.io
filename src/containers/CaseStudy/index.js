import React from 'react';
import cn from 'classnames';
import { withRouteData } from 'react-static';

import Hero from '@components/Hero';
import ActionBar from '@components/ActionBar';

const InfoItem = ({ className, name, value }) => {
  if (!value) return null;

  return (
    <div className={cn('flex', className)}>
      <div className="w-1/3 font-bold">{name}:</div>

      <div>{value}</div>
    </div>
  );
};

const Info = ({ logo, name, about, industry, location, employees }) => {
  return (
    <div className="p-8 rounded bg-white shadow">
      <div className="text-center">
        <div className="p-8">{logo ? <img src={logo} alt={name} /> : <h1>{name}</h1>}</div>
      </div>

      {about && <div className="pt-4">{about}</div>}

      <div className="pt-4">
        <InfoItem name="Industry" value={industry} />
        <InfoItem className="pt-2" name="Location" value={location} />
        <InfoItem className="pt-2" name="Employees" value={employees} />
      </div>
    </div>
  );
};

const Quote = ({ quote, author, role }) => {
  return (
    <div className="mt-8 p-8 shadow rounded bg-grey-lighter relative">
      <p className="leading-loose pb-6 italic text-lg">{`"${quote}"`}</p>

      <div className="font-bold">
        <div className="pb-1 uppercase text-green">{author}</div>
        <div>{role}</div>
      </div>
    </div>
  );
};

const Quotes = ({ quotes }) => {
  if (!quotes || !quotes.length) {
    return null;
  }

  return quotes.map((quote, index) => {
    return <Quote key={index} {...quote} />;
  });
};

export class CaseStudy extends React.Component {
  render() {
    const { hero, body, info, quotes, actionBar } = this.props;

    const elems = [];

    if (hero) {
      elems.push(<Hero key="hero" {...hero} pageName="customer story" aligned="left" />);
    }

    elems.push(
      <div key="content" className="container mx-auto my-24">
        <div className="relative">
          <div className="-mt-40 ml-12 mb-12 w-1/3 md:mt-0 md:ml-0 md:mb-24 md:w-full float-right md:float-none">
            <Info {...info} />
            <Quotes quotes={quotes} />
          </div>

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

export default withRouteData(CaseStudy);
