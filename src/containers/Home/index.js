import React from 'react';
import { withRouteData } from 'react-static';

import Hero from '@components/Hero';
import ImageSection from '@components/ImageSection';
import { Section } from '@components/Section';
import CallToAction from '@components/CallToAction';
import ActionBar from '@components/ActionBar';
import Testimonial from '@components/Testimonial';

export function Home({ color, hero, product, customers = [], testimonials = [], actionBar = {} }) {
  const elems = [];

  if (hero) {
    elems.push(<Hero key="hero" bgColor={color} {...hero} />);
  }

  if (product) {
    elems.push(<ImageSection key="product" {...product} />);
  }

  if (customers.length) {
    elems.push(
      <Section key="customers" bgClassName="bg-grey-lightest">
        <div className="container">
          <h2 className="text-center mb-20 text-3xl md:mb-14">
            Thousands of companies use Stoplight to streamline
            <br />
            their API &amp; Microservices workflow
          </h2>

          <div className="flex justify-center flex-wrap items-center pb-32 md:pb-20">
            {customers.map((customer, key) => {
              return (
                <div key={key} className="sm:w-1/2 sm:p-6 p-8 text-center">
                  <img className="h-12" src={customer} alt="" />
                </div>
              );
            })}
          </div>

          <CallToAction
            name="Read The Case Studies"
            href="/case-studies"
            className="text-center"
            size="lg"
            color="green"
          />
        </div>
      </Section>
    );
  }

  if (testimonials.length) {
    elems.push(
      <Section key="testimonials">
        <div className="container">
          <div className="flex flex-wrap -mx-14 sm:mx-0">{testimonials.map(Testimonial)}</div>
        </div>

        {actionBar && actionBar.enabled ? (
          <ActionBar className="bg-grey-lightest sm:mt-20 mt-32" {...actionBar} />
        ) : null}
      </Section>
    );
  }

  return elems;
}

export default withRouteData(Home);
