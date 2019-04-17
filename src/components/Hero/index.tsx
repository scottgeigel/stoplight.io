import cn from 'classnames';
import * as React from 'react';

import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CallToAction, ICallToAction } from 'src/components/CallToAction';
import { Container } from 'src/components/Container';
import { headerHeightClass } from 'src/components/Header';
import { IImage, Image } from 'src/components/Image';
import { Link } from 'src/components/Link';
import { ITab, Tabs } from 'src/components/Tabs';

let Particles;
if (typeof window !== 'undefined') {
  Particles = require('react-particles-js').default;
}

const indexMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
};

interface IHeroCard {
  index: number;
  title: string;
  subtitle: string;
  href: string;
  bgColor: string;
  icon: {
    name: IconName;
  };
  image: string;
}

export interface IHeroButton {
  title: string;
  href: string;
  icon?: IconName;
  color?: string;
}

export interface IHeroAuthor {
  className?: string;
  name?: string;
  path?: string;
  image?: string;
  meta?: string;
}

export interface IHeroBreadCrumb {
  title: string;
  path?: string;
}

interface IHeroImage extends IImage {
  section?: boolean;
  className?: string;
}

export interface IHero {
  title: string;
  subtitle: string;
  pageName?: string;
  breadCrumbs?: IHeroBreadCrumb[];
  author?: IHeroAuthor;
  image?: IHeroImage;
  bgColor?: string;
  contentBgImage?: string;
  contentBgOverlay?: string;
  aligned?: 'center' | 'right' | 'left';
  cta?: ICallToAction;
  cards?: IHeroCard[];
  buttons?: IHeroButton[];
  particles?: boolean;
  skew?: 'rounded' | string;
  containerClassName?: string;
  tabs?: ITab[];
}

export const HeroAuthor: React.FunctionComponent<IHeroAuthor> = ({ className, name, path = '', image, meta }) => {
  if (!image && !name && !meta) return null;

  return (
    <Link to={path} disabled={!path} className={cn(className, 'flex items-center')}>
      {image && (
        <Image
          className="mr-2 rounded-full h-16 w-16 bg-center bg-contain bg-no-repeat"
          src={image}
          alt="author"
          background
          size="sm"
        />
      )}
      <div>
        {name && <div>{name}</div>}
        {meta && <div className="opacity-85 text-sm">{meta}</div>}
      </div>
    </Link>
  );
};

const HeroCard: React.FunctionComponent<IHeroCard> = ({
  index,
  title,
  subtitle,
  href,
  bgColor = 'black',
  icon,
  image,
}) => {
  return (
    <Link
      to={href}
      className={cn(
        'HeroBlock',
        'md:mb-6',
        'shadow relative flex flex-col flex-1 h-48 md:h-40 overflow-hidden rounded-md p-6 mx-3 text-left z-10 text-white',
        `block-${indexMap[index]}`,
        {
          [`bg-${bgColor}`]: bgColor,
          'cursor-pointer': href,
        }
      )}
    >
      <div className="flex items-center">
        {icon && <FontAwesomeIcon icon={['fas', icon.name]} className="mr-3" />} <h3>{title}</h3>
      </div>
      {subtitle && <div className="mt-4 leading-loose">{subtitle}</div>}

      {image && <Image src={image} className="rounded-full bg-cover h-48 w-32" size="sm" useDiv />}
      <div className={cn(`triangle-${indexMap[index]}`, 'platform-block-triangle')} />
    </Link>
  );
};

const HeroButton: React.FunctionComponent<IHeroButton> = ({ title, icon, href, color }) => {
  if (!href && !title && !icon) {
    return null;
  }

  const className = cn('flex items-center py-3 text-grey-darkest pl-4 pr-6 sm:m-3 mx-3 shadow-md bg-white rounded-md', {
    'hover:opacity-93 cursor-pointer': href,
    'cursor-default': !href,
  });

  const elems: JSX.Element[] = [];

  if (icon) {
    elems.push(
      <FontAwesomeIcon key="1" icon={['fas', icon]} className={cn('mr-2 text-lg', `text-${color || 'green'}`)} />
    );
  }

  if (title) {
    elems.push(
      <div key="2" className="font-semibold">
        {title}
      </div>
    );
  }

  let elem;
  if (href) {
    elem = (
      <Link to={href} className={className}>
        {elems}
      </Link>
    );
  } else {
    elem = <div className={className}>{elems}</div>;
  }

  return <div className="sm:w-1/2">{elem}</div>;
};

const HeroImage: React.FunctionComponent<IHeroImage> = ({ className, section = true, src, alt }) => {
  if (!src) {
    return null;
  }

  return (
    <section className="md:hidden">
      {
        <Container className="relative text-center" style={{ height: 500 }}>
          <Image className={cn(className, 'rounded-lg')} src={src} alt={alt} size="lg" />
        </Container>
      }
    </section>
  );
};

export const Hero: React.FunctionComponent<IHero> = ({
  pageName,
  breadCrumbs,
  aligned = 'center',
  title,
  subtitle,
  author,
  cta,
  bgColor = 'black',
  contentBgImage,
  particles,
  image,
  skew,
  containerClassName,
  cards = [],
  buttons = [],
  tabs = [],
}) => {
  // Filter out any empty button objects
  const heroButtons = buttons.filter(button => {
    return button.href || button.title || button.icon;
  });

  // Filter out any empty button objects
  const heroTabs = tabs.filter(tab => {
    return tab.href;
  });

  return (
    <React.Fragment>
      <div
        key="main"
        className={cn('relative', {
          'overflow-hidden': skew === 'rounded',
        })}
      >
        <div className={cn(headerHeightClass, 'w-100')} />

        <Image
          src={particles ? '' : '/images/patterns/diagonal-stripes-sm.png'}
          className={cn('absolute z-0 border-4 border-lighten-300 overflow-hidden', {
            [`bg-${bgColor}`]: bgColor,
          })}
          style={{
            bottom: image ? -150 : cards.length ? 50 : 0,
            width: skew === 'rounded' ? '200%' : 'auto',
            top: skew === 'rounded' ? '-50%' : -300,
            left: skew === 'rounded' ? '-50%' : 0,
            right: skew === 'rounded' ? '-50%' : 0,
            borderRadius: skew === 'rounded' ? '50%' : '0',
            transform: skew && skew !== 'rounded' ? `skew(0, ${skew})` : undefined,
          }}
          useDiv
        />

        {contentBgImage && (
          <div
            className="absolute pin z-0 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contentBgImage})`,
            }}
          />
        )}

        <div
          className={cn(
            containerClassName,
            `container text-white flex flex-col pt-32 md:pt-24 relative z-5 text-${aligned}`
          )}
          style={contentBgImage ? { textShadow: `rgba(0, 0, 0, 0.5) 1px 1px 0px` } : undefined}
        >
          <div
            className={cn('mb-24', {
              'mx-auto': !aligned || aligned === 'center',
              'ml-auto w-2/3 md:w-full': aligned === 'right',
              'mr-auto w-2/3 md:w-full': aligned === 'left',
            })}
          >
            {breadCrumbs && breadCrumbs.length ? (
              <div className="text-white opacity-85 font-semibold mb-4 flex items-center">
                {breadCrumbs.map((breadCrumb, index) => (
                  <React.Fragment key={index}>
                    <Link className="text-white" to={breadCrumb.path}>
                      {breadCrumb.title}
                    </Link>
                    {index < breadCrumbs.length - 1 ? <span className="mx-2">></span> : null}
                  </React.Fragment>
                ))}
              </div>
            ) : null}

            {pageName && <div className="uppercase text-white opacity-85 font-semibold mb-4">{pageName}</div>}

            <h1>{title}</h1>

            {subtitle && (
              <div
                className={cn('font-default opacity-85 text-xl max-w-lg mt-4 md:mt-6', {
                  'mx-auto': !aligned || aligned === 'center',
                  'ml-auto': aligned === 'right',
                  'mr-auto': aligned === 'left',
                })}
              >
                {subtitle}
              </div>
            )}

            {author && (
              <div>
                <HeroAuthor className="mt-6 text-white opacity-85" {...author} />
              </div>
            )}
          </div>

          {cta && (
            <CallToAction
              className={cn('pb-24 md:pb-4', {
                'mx-auto': aligned === 'center',
                'ml-auto': aligned === 'right',
                'mr-auto': aligned === 'left',
              })}
              {...cta}
            />
          )}

          {!cards.length && heroButtons.length ? (
            <div className="flex flex-wrap mx-auto pb-24 md:pt-16">
              {heroButtons.map((button, i) => (
                <HeroButton key={i} color={bgColor} {...button} />
              ))}
            </div>
          ) : null}

          {cards.length ? (
            <div className="flex mx-auto md:flex-col md:pt-16">
              {cards.map((card, i) => (
                <HeroCard key={i} index={i + 1} {...card} />
              ))}
            </div>
          ) : null}
        </div>

        {heroTabs.length > 0 ? <Tabs tabs={heroTabs} /> : null}

        {particles && (
          <div className="absolute z-1 sm:hidden" style={{ left: 0, top: -100, right: 0, bottom: -100 }}>
            {Particles && (
              <Particles
                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                params={{
                  fps_limit: 15,
                  retina_detect: false, // possible performance issues when true
                  particles: {
                    number: {
                      value: 160,
                      density: {
                        enable: false,
                      },
                    },
                    size: {
                      value: 3,
                      random: true,
                      anim: {
                        speed: 4,
                        size_min: 0.3,
                      },
                    },
                    line_linked: {
                      enable: false,
                    },
                    move: {
                      random: true,
                      speed: 1,
                      direction: 'top',
                      out_mode: 'out',
                    },
                  },
                }}
              />
            )}
          </div>
        )}
      </div>

      {image && <HeroImage {...image} />}
    </React.Fragment>
  );
};
