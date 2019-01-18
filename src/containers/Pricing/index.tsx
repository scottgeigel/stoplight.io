import * as React from 'react';
import { withRouteData } from 'react-static';

import { Hero, IHero } from 'src/components/Hero';
import { IPricingPlan, PricingPlans } from 'src/components/PricingPlans';

import { DocPlans, IDocPlans } from 'src/sections/DocPlans';

export interface IPricing {
  color: string;
  hero: IHero;
  plans: IPricingPlan[];
  docPlans: IDocPlans;
}

export const Pricing: React.FunctionComponent<IPricing> = ({ color, hero, plans, docPlans }) => {
  return (
    <React.Fragment>
      <Hero bgColor={color} {...hero} skew="7deg" containerClassName="pb-64" />

      <PricingPlans color={color} plans={plans} />

      <DocPlans {...docPlans} />
    </React.Fragment>
  );
};

export default withRouteData(Pricing);
