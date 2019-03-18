import * as React from 'react';
import { withRouteData } from 'react-static';

import { Container } from 'src/components/Container';
import { Hero, IHero } from 'src/components/Hero';
import { HubSpotForm, IHubspotForm } from 'src/components/HubSpotForm';
import { IRelatedPage, RelatedPages } from 'src/components/RelatedPages';
import { Section } from 'src/components/Section';
import { Collage, ICollage } from 'src/sections/Collage';
import { ITestimonials, Testimonials } from 'src/sections/Testimonials';

export interface IForm {
  color: string;
  hero: IHero;
  hubspot: IHubspotForm;
  collage: ICollage;
  testimonials: ITestimonials;
  relatedPages?: IRelatedPage[];
}

export const Form: React.FunctionComponent<IForm> = ({ color, hero, hubspot, collage, testimonials, relatedPages }) => {
  return (
    <React.Fragment>
      <Hero bgColor={color} {...hero} />

      <Section id="hubspot">
        <Container className="flex items-center justify-center">
          <HubSpotForm {...hubspot} className="-mt-64" />
        </Container>
      </Section>

      <Collage id="customers" {...collage} />

      <Testimonials {...testimonials} />

      {relatedPages && relatedPages.length ? <RelatedPages pages={relatedPages} /> : null}
    </React.Fragment>
  );
};

export default withRouteData(Form);
