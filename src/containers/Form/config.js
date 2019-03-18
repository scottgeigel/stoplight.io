import metaTags from 'src/components/MetaTags/config';

import hero from 'src/components/Hero/config';
import actionBar from 'src/components/ActionBar/config';
import hubspot from 'src/components/HubSpotForm/config';

import collage from 'src/sections/Collage/config';
import testimonials from 'src/sections/Testimonials/config';

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
    hero,
    hubspot,
    collage,
    testimonials,
    actionBar,
    metaTags,
  ],
};
