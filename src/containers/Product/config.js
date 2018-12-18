import hero from '@components/Hero/config';
import actionBar from '@components/ActionBar/config';
import metaTags from '@components/MetaTags/config';
import cta from '@components/CallToAction/config';

export default {
  label: 'Products',
  label_singular: 'Product',
  name: 'products',
  folder: 'netlify/products',
  create: true,
  delete: false,
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
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'description',
      name: 'Description',
      widget: 'markdown',
    },
    cta,
    {
      name: 'features',
      label: 'Features',
      widget: 'list',
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
        },
        {
          name: 'titleURL',
          label: 'Title URL',
          widget: 'string',
          required: false,
        },
        {
          name: 'shortName',
          label: 'Short Name',
          widget: 'string',
        },
        {
          name: 'image',
          label: 'Image',
          widget: 'image',
        },
        {
          name: 'description',
          label: 'Description',
          widget: 'markdown',
        },
        {
          name: 'href',
          label: 'Link',
          widget: 'string',
        },
      ],
    },
    actionBar,
    metaTags,
  ],
};
