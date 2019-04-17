import cn from 'classnames';
import * as React from 'react';

import { Button, IButton } from 'src/components/Button';
import { Container } from 'src/components/Container';
import { Link } from 'src/components/Link';
import { ISection, Section } from 'src/components/Section';

import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Image } from 'src/components/Image';
import { slugify } from 'src/utils/text';

export interface IFeature {
  title: string;
  shortName: string;
  titleURL: string;
  description: string;
  image: string;
  isReversed: boolean;
  titleColor: string;
  isLast: boolean;
}

export interface IFeatureSection extends ISection {
  title: string;
  description: string;
  color: string;
  features: IFeature[];
  actionBar: IActionBar;
  buttons: IButton[];
}

export const Feature: React.FunctionComponent<IFeature> = props => {
  const { title, titleURL, description, image, isReversed, titleColor, isLast } = props;

  return (
    <div
      id={slugify(title)}
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
          {titleURL ? (
            <Link to={titleURL} className={`text-${titleColor || 'grey-darkest'}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <div
          className={cn('mb-12 pb-12 md:pb-0 max-w-md leading-loose text-lg', {
            'md:mb-0': isLast,
          })}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <div className="flex-1 w-1/2 md:hidden relative">
        <Image
          src={image}
          className="bg-center bg-cover bg-no-repeat h-128 w-128 rounded-full"
          style={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.5)' }}
          size="md"
          useDiv
        />
      </div>
    </div>
  );
};

export const FeatureSection: React.FunctionComponent<IFeatureSection> = ({
  title,
  description,
  color,
  features,
  actionBar,
  buttons = [],
  ...sectionProps
}) => {
  if (!features || !features.length) {
    return null;
  }

  return (
    <Section id="product" {...sectionProps}>
      {(title || description) && (
        <Container title={title} className={cn(!buttons.length ? 'pb-32 border-b' : null)}>
          {description && (
            <div
              className="flex leading-loose text-lg text-center max-w-lg mx-auto"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </Container>
      )}

      {buttons.length ? (
        <Container className="mt-20 pb-32 border-b">
          <div className="flex-1 flex lg:justify-center lg:items-between lg:flex-wrap">
            {buttons.map((button, index) => (
              <Button key={index} className={index > 0 ? 'ml-4 sm:ml-0' : ''} {...button} />
            ))}
          </div>
        </Container>
      ) : null}

      <Container className="mx-auto py-16">
        {features.map((feature, index) => (
          <Feature
            key={index}
            titleColor={color}
            {...feature}
            isReversed={index % 2 !== 0}
            isLast={index === features.length - 1}
          />
        ))}
      </Container>

      <ActionBar className="bg-white sm:mt-14 mt-20" {...actionBar} />
    </Section>
  );
};
