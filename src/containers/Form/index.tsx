import cn from 'classnames';
import * as React from 'react';
import { withRouteData } from 'react-static';

import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Container } from 'src/components/Container';
import { Hero } from 'src/components/Hero';
import { HubSpotForm, IHubSpotForm } from 'src/components/HubSpotForm';
import { Image } from 'src/components/Image';
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
  titleImage?: string;
  relatedPages?: IRelatedPage[];
  actionBar: IActionBar;
  leftContent?: {
    title: string;
    description: string;
  };
}

export const Form: React.FunctionComponent<IForm> = ({
  titleImage,
  title,
  subtitle,
  color,
  leftContent,
  hubspot,
  collage,
  testimonials,
  relatedPages,
  actionBar,
}) => {
  const hasLeftContent = leftContent && leftContent.description ? true : false;

  return (
    <React.Fragment>
      <Hero
        titleImage={titleImage}
        title={title}
        subtitle={subtitle}
        bgColor={color}
        aligned={hasLeftContent || titleImage ? 'left' : 'center'}
        titleClassName={hasLeftContent ? '' : 'mb-40'}
      />

      <Container className="flex relative z-20 py-24 md:flex-wrap-reverse">
        {hasLeftContent && (
          <div className="w-2/3 md:w-full pr-24 md:pr-0 flex-1">
            {leftContent &&
              leftContent.title && <div className="text-3xl" dangerouslySetInnerHTML={{ __html: leftContent.title }} />}

            {leftContent &&
              leftContent.description && (
                <div
                  className={cn('markdown-body', leftContent.title ? 'mt-10' : '')}
                  dangerouslySetInnerHTML={{ __html: leftContent.description }}
                />
              )}
          </div>
        )}

        {hubspot && (
          <div className={hasLeftContent ? 'z-10 relative md:w-full' : 'flex-1 -mt-40'}>
            <HubSpotForm
              className="p-8 sticky"
              portalId={hubspot.portalId}
              formId={hubspot.formId}
              style={{ width: hasLeftContent ? 350 : 450, top: 100 }}
            />
          </div>
        )}
      </Container>

      <section />

      <Testimonials {...testimonials} />

      <Collage id="customers" {...collage} />

      {actionBar && <ActionBar className="my-24" {...actionBar} />}

      {relatedPages && relatedPages.length ? <RelatedPages pages={relatedPages} /> : null}
    </React.Fragment>
  );
};

export default withRouteData(Form);
