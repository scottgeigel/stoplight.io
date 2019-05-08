import * as React from 'react';
import { withRouteData } from 'react-static';

import { Container } from 'src/components/Container';
import { Hero } from 'src/components/Hero';
import { HubSpotForm, IHubSpotForm } from 'src/components/HubSpotForm';
import { IRelatedPage, RelatedPages } from 'src/components/RelatedPages';
import { Collage, ICollage } from 'src/sections/Collage';
import { ITestimonials, Testimonials } from 'src/sections/Testimonials';

export interface IForm {
  title: string;
  subtitle: string;
  color: string;
  hubspot: IHubSpotForm;
  collage: ICollage;
  testimonials: ITestimonials;
  relatedPages?: IRelatedPage[];

  leftContent?: {
    title: string;
    description: string;
  };
}

export const Form: React.FunctionComponent<IForm> = ({
  title,
  subtitle,
  color,
  leftContent,
  hubspot,
  collage,
  testimonials,
  relatedPages,
}) => {
  const hasLeftContent = leftContent && leftContent.title && leftContent.description ? true : false;

  return (
    <React.Fragment>
      <Hero
        title={title}
        subtitle={subtitle}
        bgColor={color}
        aligned={hasLeftContent ? 'left' : 'center'}
        skew={hasLeftContent ? '3deg' : undefined}
      />

      <Container className="flex relative z-20 pb-24 md:flex-wrap-reverse">
        {hasLeftContent && (
          <div className="w-2/3 md:w-full pt-24 pr-24 md:pr-0">
            {leftContent &&
              leftContent.title && <div className="text-3xl" dangerouslySetInnerHTML={{ __html: leftContent.title }} />}

            {leftContent &&
              leftContent.description && (
                <div className="mt-10 text-lg" dangerouslySetInnerHTML={{ __html: leftContent.description }} />
              )}
          </div>
        )}

        {hubspot && (
          <div className={hasLeftContent ? '-mt-64 md:-mt-24 -mr-64 md:mr-0 z-10 relative md:w-full' : 'flex-1 -mt-24'}>
            <HubSpotForm className="p-8" portalId={hubspot.portalId} formId={hubspot.formId} style={{ width: 400 }} />
          </div>
        )}
      </Container>

      <section />

      <Collage id="customers" {...collage} />

      <Testimonials {...testimonials} />

      {relatedPages && relatedPages.length ? <RelatedPages pages={relatedPages} /> : null}
    </React.Fragment>
  );
};

export default withRouteData(Form);
