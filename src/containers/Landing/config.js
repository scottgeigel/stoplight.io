import metaTags from 'src/components/MetaTags/config';

import hero from 'src/components/Hero/config';
import hubspot from 'src/components/HubSpotForm/config';

import collage from 'src/sections/Collage/config';
import imageCallout from 'src/sections/ImageCallout/config';
import featureSection from 'src/sections/FeatureSection/config';

import { colors } from 'src/utils';

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
    {
      label: 'Color',
      name: 'color',
      widget: 'select',
      options: colors,
      default: 'black',
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
    collage,
    imageCallout,
    featureSection,
    hubspot,
    metaTags,
  ],
};
