import hero from 'src/components/Hero/config';
import metaTags from 'src/components/MetaTags/config';
import pricingPlans from 'src/components/PricingPlans/config';

import docPlans from 'src/sections/DocPlans/config';

export default {
  label: 'Pricing',
  name: 'pricing',
  file: 'netlify/pages/pricing.yaml',
  fields: [
    {
      name: 'path',
      label: 'path',
      widget: 'string',
    },
    {
      name: 'color',
      label: 'Color',
      widget: 'string',
    },
    hero,
    pricingPlans,
    docPlans,
    metaTags,
  ],
};
