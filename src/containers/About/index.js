import React from 'react';
import cn from 'classnames';
import { withRouteData } from 'react-static';

import CallToAction from '@components/CallToAction';
import ActionBar from '@components/ActionBar';
import Hero from '@components/Hero';
import { Section } from '@components/Section';

const Quote = ({ image, company, quote, author, role }) => {
  return (
    <div className="py-8 px-4 shadow bg-white rounded-lg flex flex-col justify-between">
      <div className="px-2 py-2 pb-8 flex justify-center items-start m-auto">
        <img style={{ maxHeight: 50 }} src={image} alt={company} />
      </div>

      <p className="leading-loose pb-6">{`"${quote}"`}</p>
      <div className="font-bold pb-1 uppercase text-blue">{author}</div>
      <div>
        {company}, {role}
      </div>
    </div>
  );
};

const Member = ({ image, name, role, link, isLast }) => {
  return (
    <div className={cn('mb-48 -mt-24 px-10 sm:px-0 sm:w-48', { 'sm:mb-24': isLast })}>
      <a
        href={link ? link.href : undefined}
        className={cn('block text-center shadow bg-white py-10 sm:py-4 px-4 sm:px-0 h-64 w-64 sm:w-full rounded-lg', {
          'cursor-pointer': link,
        })}
        target="_blank"
      >
        <div
          className="-mt-20 mx-auto rounded-full bg-cover shadow-sm border-grey border h-32 w-32 mb-10"
          style={{
            backgroundImage: `url(${image})`,
          }}
          alt={name}
        />

        <div className="font-bold uppercase text-green">{name}</div>

        {role && <div className="pt-2 text-black">{role}</div>}

        {link && <div className="pt-2">{link.title}</div>}
      </a>
    </div>
  );
};

const Press = ({ image, date, description, publication, href }) => {
  return (
    <div
      href={href}
      target="_blank"
      className="pb-6 px-6 shadow bg-white rounded-lg text-grey-darker cursor-pointer hover:bg-grey-lightest"
    >
      <div className="flex items-center justify-center items-start h-32">
        <img src={image} alt={publication} />
      </div>

      <div className="uppercase font-bold mb-3">{date}</div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export function About({ color, hero, quotes = [], team = [], actionBar = {}, press = [], investors = [] }) {
  return (
    <div>
      <Hero key="hero" bgColor={color} {...hero} containerClassName="pb-24" />

      {team.length ? (
        <section className="bg-grey-lightest relative z-5" style={{ marginTop: -50 }}>
          <div className="container flex flex-wrap justify-center md:justify-around text-center md:px-0">
            {team.map((member, index) => (
              <Member key={index} isLast={index === team.length - 1} {...member} />
            ))}
          </div>

          {actionBar && actionBar.enabled ? (
            <div className="md:pb-24 pb-40 -mt-10">
              <ActionBar className="bg-white" {...actionBar} />
            </div>
          ) : null}
        </section>
      ) : null}

      {press.length ? (
        <Section key="press">
          <div className="container">
            <h2 className="text-center mb-20 text-3xl md:mb-14">In The Press</h2>

            <div className="flex justify-center flex-wrap -mb-12">
              {press.map((quote, key) => {
                return (
                  <div key={key} className="flex md:w-full w-1/4 px-6 mb-12">
                    <Press {...quote} />
                  </div>
                );
              })}
            </div>

            <div className="mt-24 md:mt-14 text-center">
              <CallToAction
                className="inline"
                size="md"
                color="grey-darkest"
                name="More Press & Assets"
                href="https://press.stoplight.io"
              />
            </div>
          </div>
        </Section>
      ) : null}

      {quotes.length ? (
        <Section key="businesses" bgClassName="bg-grey-lightest">
          <div className="container">
            <h2 className="text-center mb-20 text-3xl md:mb-14">Businesses Are Loving Stoplight</h2>

            <div className="flex justify-center flex-wrap -mb-12">
              {quotes.map((quote, key) => {
                return (
                  <div key={key} className="flex md:w-full w-1/3 px-6 mb-12">
                    <Quote {...quote} />
                  </div>
                );
              })}
            </div>
          </div>
        </Section>
      ) : null}

      {investors.length ? (
        <Section key="investors">
          <div className="container">
            <h2 className="text-center mb-20 text-3xl md:mb-14">Our Investors</h2>

            <div className="flex justify-center flex-wrap items-center">
              {investors.map((investor, key) => {
                return (
                  <div key={key} className="p-10 text-center">
                    <img className="h-24" src={investor.image} alt={investor.name} />
                  </div>
                );
              })}
            </div>
          </div>
        </Section>
      ) : null}
    </div>
  );
}

export default withRouteData(About);
