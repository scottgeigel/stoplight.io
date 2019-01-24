import * as React from 'react';
import { withRouteData } from 'react-static';

import { Hero, IHero, IHeroButton } from 'src/components/Hero';
import { HubSpotForm, IHubspot } from 'src/components/HubSpotForm';
import { Section } from 'src/components/Section';

import { Collage, ICollage } from 'src/sections/Collage';
import { FeatureSection, IFeatureSection } from 'src/sections/FeatureSection';
import { IImageCallout, ImageCallout } from 'src/sections/ImageCallout';

import { slugify } from 'src/utils/text';

export interface ILanding {
  color: string;
  hero: IHero;
  imageCallout: IImageCallout;
  collage: ICollage;
  featureSection: IFeatureSection;
  hubspot: IHubspot;
}

export const Landing: React.FunctionComponent<ILanding> = ({
  color,
  hero,
  imageCallout,
  collage,
  featureSection,
  hubspot,
}) => {
  let buttons: IHeroButton[] = [];
  if (featureSection && featureSection.features.length) {
    buttons = featureSection.features.map(feature => ({
      title: feature.shortName,
      icon: 'check-circle',
      href: `#${slugify(feature.title)}`,
    }));
  }

  return (
    <React.Fragment>
      <Hero bgColor={color} buttons={buttons} {...hero} />

      <Collage size="sm" className="md:px-0 py-6 md:py-6" noPadding {...collage} />

      <ImageCallout {...imageCallout} />

      <FeatureSection color={color} {...featureSection} />

      {hubspot && (
        <Section key="hubspot" id="demo">
          <div className="container flex items-center justify-center">
            <HubSpotForm {...hubspot} />
          </div>
        </Section>
      )}
    </React.Fragment>
  );
};

export default withRouteData(Landing);
