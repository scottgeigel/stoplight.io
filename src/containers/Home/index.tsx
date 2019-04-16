import * as React from 'react';
import { withRouteData } from 'react-static';

import { Hero, IHero } from 'src/components/Hero';

import { Collage, ICollage } from 'src/sections/Collage';
import { IImageCallout, ImageCallout } from 'src/sections/ImageCallout';
import { ITestimonials, Testimonials } from 'src/sections/Testimonials';

export interface IHome {
  color: string;
  hero: IHero;
  imageCallout: IImageCallout;
  collage: ICollage;
  testimonials: ITestimonials;
}

export const Home: React.FunctionComponent<IHome> = ({ color, hero, imageCallout, collage, testimonials }) => {
  return (
    <React.Fragment>
      <Hero bgColor={color} {...hero} />

      <ImageCallout {...imageCallout} />

      <Collage id="customers" {...collage} />

      <Testimonials {...testimonials} />
    </React.Fragment>
  );
};

export default withRouteData(Home);
