import * as React from 'react';
import { withRouteData } from 'react-static';

import { Hero, IHero } from 'src/components/Hero';
import { IPricingPlans, PricingPlans } from 'src/components/PricingPlans';

import { DocPlans, IDocPlan } from 'src/sections/DocPlans';

export interface IPricing {
  color: string;
  hero: IHero;
  plans: IPricingPlans;
  docPlans: IDocPlan[];
}

export const Pricing = ({ color, hero, pricingPlans, docPlans }) => {
  return (
    <React.Fragment>
      <Hero bgColor={color} {...hero} skew="7deg" containerClassName="pb-64" />

      <PricingPlans color={color} {...pricingPlans} />

      <DocPlans {...docPlans} />
    </React.Fragment>
  );
};

export default withRouteData(Pricing);
