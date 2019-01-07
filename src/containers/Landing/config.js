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
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      hint: 'Only used for Admin reference',
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
      label: 'Heading',
      name: 'heading',
      widget: 'string',
      required: false,
      hint: 'The title above the main content',
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'markdown',
      required: false,
      hint: 'The main content of the page',
    },
    cta,
    {
      name: 'features',
      label: 'Features',
      widget: 'list',
      required: false,
      fields: productFeature.fields,
      hint: 'A list of features with text on one side and image on the other',
    },
    actionBar,
    hubspot,
    metaTags,
  ],
};
