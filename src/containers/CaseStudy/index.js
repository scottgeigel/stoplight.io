import React from 'react';
import cn from 'classnames';
import { withRouteData } from 'react-static';

import Hero from '@components/Hero';
import ActionBar from '@components/ActionBar';

import '@styles/markdown.scss';
import '@styles/highlight.scss';

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
    <div key="index">
      <p className="leading-loose pb-6 italic text-lg">{`"${quote}"`}</p>

      <div className="font-bold">
        <div className="pb-1 uppercase text-green">{author}</div>
        <div>{role}</div>
      </div>
    </div>
  );
};

const Quotes = ({ quotes }) => {
  if (!quotes || !quotes.length) return null;

  return (
    <div className="mt-8 p-8 shadow rounded bg-grey-lighter relative">
      {quotes.map((quote, index) => {
        return <Quote key={index} {...quote} />;
      })}
    </div>
  );
};

class CaseStudy extends React.Component {
  render() {
    const { hero, body, info, quotes, actionBar } = this.props;

    const elems = [];

    if (hero) {
      elems.push(<Hero key="hero" {...hero} pageName="customer story" aligned="left" />);
    }

    elems.push(
      <div key="content" className="container mx-auto pb-24 pt-24">
        <div className="relative flex md:flex-col-reverse">
          <div
            className="markdown-body flex-1 pr-32 md:pr-0"
            dangerouslySetInnerHTML={{ __html: body }}
          />

          <div className="-mt-40 w-1/3 md:mt-0 md:w-full md:pb-24">
            <Info {...info} />
            <Quotes quotes={quotes} />
          </div>
        </div>
      </div>
    );

    if (actionBar) {
      elems.push(<ActionBar key="actionBar" className="mt-20 mb-24" {...actionBar} />);
    }

    return elems;
  }
}

export default withRouteData(CaseStudy);
