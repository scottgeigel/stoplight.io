import React from 'react';
import { withRouteData } from 'react-static';
import cn from 'classnames';

import CallToAction from '@components/CallToAction';
import Hero from '@components/Hero';
import Section from '@components/Section';
import ActionBar from '@components/ActionBar';
import Link from '@components/Link';

import { slugify } from '@utils/text';

const ProductFeature = ({ title, titleURL, description, image, isReversed, titleColor, isLast }) => {
  return [
    <a key="anchor" name={slugify(title)} />,
    <div
      key="content"
      className={cn('flex items-center py-12 md:pb-0', {
        'flex-row': !isReversed,
        'flex-row-reverse': isReversed,
      })}
    >
      <div
        className={cn('flex flex-col flex-1 w-1/2 md:w-100', {
          'pr-24 md:pr-0': !isReversed,
          'pl-18 md:pl-0': isReversed,
        })}
      >
        <h2 className={cn('max-w-sm mb-10 text-3xl', `text-${titleColor || 'grey-darkest'}`)}>
            {titleURL ? <Link to={titleURL} className={`text-${titleColor || 'grey-darkest'}`}>{title}</Link> : title}
        </h2>
        <div
          className={cn('mb-12 pb-12 md:pb-0 max-w-md leading-loose text-lg', {
            'md:mb-0': isLast,
          })}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <div className="flex-1 w-1/2 md:hidden relative">
        <div
          className="bg-center bg-cover bg-no-repeat h-128 w-128 rounded-full"
          style={{ backgroundImage: `url(${image})`, boxShadow: '0 0 4px rgba(0, 0, 0, 0.5)' }}
        />
      </div>
    </div>,
  ];
};

class Product extends React.Component {
  render() {
    const { color, hero, title, description, cta, features = [], actionBar = {} } = this.props;

    const elems = [];

    if (hero) {
      elems.push(
        <Hero
          key="hero"
          bgColor={color}
          {...hero}
          features={features.map(feature => ({
            name: feature.shortName,
            href: `#${slugify(feature.title)}`,
          }))}
        />
      );
    }

    elems.push(
      <Section key="product" bgClassName="bg-grey-lightest">
        <div className="container border-b pb-32">
          <h2 className="text-center mb-12 text-3xl">{title}</h2>
          <div
            className="flex leading-loose text-lg text-center max-w-lg mx-auto"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {cta && <CallToAction {...cta} className="mx-auto text-center mt-20" />}
        </div>

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

        {actionBar && actionBar.enabled ? (
          <ActionBar className="bg-white sm:mt-14 mt-20" {...actionBar} />
        ) : null}
      </Section>
    );

    return elems;
  }
}

export default withRouteData(Product);
