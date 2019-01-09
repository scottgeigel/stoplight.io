import React from 'react';
import { withRouteData } from 'react-static';

import ActionBar from '@components/ActionBar';
import CallToAction from '@components/CallToAction';
import Hero from '@components/Hero';
import { ProductFeature } from '@components/ProductFeature';
import { Section } from '@components/Section';
import { HubSpotForm } from '@components/HubSpotForm';

import { slugify } from '@utils/text';

export function Landing({
  color,
  hero,
  heading,
  description,
  cta,
  customers = [],
  features = [],
  actionBar = {},
  hubspot,
}) {
  const elems = [];

  if (hero) {
    let buttons;
    if (hero.buttons && hero.buttons.length) {
      buttons = hero.buttons;
    } else if (features && features.length) {
      buttons = features.map(feature => ({
        title: feature.shortName,
        href: `#${slugify(feature.title)}`,
      }));
    }

    elems.push(<Hero key="hero" bgColor={color} buttons={buttons} {...hero} />);
  }

  if (customers && customers.length) {
    elems.push(
      <Section
        key="customers"
        id="customers"
        paddingClassName="py-6 md:py-6"
        bgClassName={elems.length % 2 ? 'bg-grey-lightest' : undefined}
      >
        <div className="container">
          <div className="flex justify-center flex-wrap items-center">
            {customers.map((customer, key) => {
              return (
                <div key={key} className="sm:w-1/2 sm:p-6 p-8 text-center">
                  <img className="h-12" src={customer} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    );
  }

  if (heading || (features && features.length) || actionBar) {
    elems.push(
      <Section key="product" id="product" bgClassName={elems.length % 2 ? 'bg-grey-lightest' : undefined}>
        {heading && (
          <div className="container border-b pb-32">
            <h2 className="text-center mb-12 text-3xl">{heading}</h2>

            {description && (
              <div
                className="flex leading-loose text-lg text-center max-w-lg mx-auto"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            {cta && <CallToAction {...cta} className="mx-auto text-center mt-20" />}
          </div>
        )}

        <div key="features" className="container mx-auto py-16">
          {features.map((feature, index) => (
            <ProductFeature
              key={index}
              titleColor={color}
              {...feature}
              isReversed={index % 2 !== 0}
              isLast={index === features.length - 1}
            />
          ))}
        </div>

        {actionBar && actionBar.enabled ? <ActionBar className="bg-white sm:mt-14 mt-20" {...actionBar} /> : null}
      </Section>
    );
  }

  if (hubspot) {
    elems.push(
      <Section key="hubspot" id="demo" bgClassName={elems.length % 2 ? 'bg-grey-lightest' : undefined}>
        <div className="container flex items-center justify-center">
          <HubSpotForm {...hubspot} />
        </div>
      </Section>
    );
  }

  return elems;
}

export default withRouteData(Landing);
