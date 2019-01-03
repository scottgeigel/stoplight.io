import hero from '@components/Hero/config';
import actionBar from '@components/ActionBar/config';
import metaTags from '@components/MetaTags/config';
import cta from '@components/CallToAction/config';
import productFeature from '@components/ProductFeature/config';
import hubspot from '@components/HubSpotForm/config';

export default {
  label: 'Landing Pages',
  label_singular: 'Landing Page',
  name: 'landings',
  folder: 'netlify/landings',
  create: true,
  delete: true,
  slug: '{{slug}}',
  extension: 'yaml',
  fields: [
    {
      label: 'URL path',
      name: 'path',
      widget: 'string',
    },
    hero,
    {
      label: 'Color',
      name: 'color',
      widget: 'string',
    },
    {
      name: 'customers',
      label: 'Customers',
      widget: 'list',
      required: false,
      field: {
        name: 'image',
        label: 'Image',
        widget: 'image',
      },
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: false,
    },
    {
      label: 'description',
      name: 'Description',
      widget: 'markdown',
      required: false,
    },
    cta,
    {
      name: 'features',
      label: 'Features',
      widget: 'list',
      required: false,
      fields: productFeature.fields,
    },
    actionBar,
    hubspot,
    metaTags,
  ],
};
