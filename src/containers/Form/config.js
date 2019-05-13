import metaTags from 'src/components/MetaTags/config';

import actionBar from 'src/components/ActionBar/config';
import hubspot from 'src/components/HubSpotForm/config';

import collage from 'src/sections/Collage/config';
import testimonials from 'src/sections/Testimonials/config';

import { colors } from 'src/utils';

export default {
  label: 'Forms',
  label_singular: 'Form',
  name: 'form',
  folder: 'netlify/forms',
  create: true,
  delete: true,
  slug: '{{slug}}',
  extension: 'yaml',
  fields: [
    {
      name: 'path',
      label: 'URL Path',
      widget: 'string',
    },
    {
      name: 'title',
      label: 'title',
      widget: 'string',
    },
    {
      label: 'Title Image',
      name: 'titleImage',
      widget: 'image',
      required: false,
    },
    {
      name: 'subtitle',
      label: 'subtitle',
      widget: 'string',
    },

    {
      label: 'Color',
      name: 'color',
      widget: 'select',
      options: colors,
      default: 'black',
    },
    hubspot,
    {
      label: 'Left Content',
      name: 'leftContent',
      widget: 'object',
      required: false,
      fields: [
        {
          name: 'title',
          widget: 'markdown',
        },
        {
          name: 'description',
          widget: 'markdown',
        },
      ],
    },
    collage,
    testimonials,
    actionBar,
    {
      label: 'Tags',
      name: 'tags',
      widget: 'list',
      required: false,
      field: { label: 'tag', name: 'tag', widget: 'string', required: false },
    },
    {
      label: 'Related Tags',
      name: 'relatedTags',
      widget: 'list',
      required: false,
      field: { label: 'tag', name: 'tag', widget: 'string', required: false },
    },
    metaTags,
  ],
};
