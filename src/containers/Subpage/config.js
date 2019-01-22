import hero from 'src/components/Hero/config';
import info from 'src/components/Info/config';
import metaTags from 'src/components/MetaTags/config';
import actionBar from 'src/components/ActionBar/config';
import quote from 'src/components/Quote/config';

export default {
  label: 'Subpages',
  label_singular: 'Subpage',
  name: 'subpage',
  folder: 'netlify/subpages',
  create: true,
  delete: true,
  slug: '{{slug}}',
  extension: 'md',
  format: 'yaml-frontmatter',
  fields: [
    {
      label: 'URL path',
      name: 'path',
      widget: 'string',
    },
    {
      label: 'Tags',
      name: 'tags',
      widget: 'list',
      required: false,
    },
    hero,
    info,
    {
      label: 'Quotes',
      name: 'quotes',
      widget: 'list',
      required: false,
      fields: quote.fields,
    },
    actionBar,
    metaTags,
    {
      label: 'Content',
      name: 'body',
      widget: 'markdown',
    },
  ],
};
