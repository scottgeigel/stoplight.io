import hero from '@components/Hero/config';
import metaTags from '@components/MetaTags/config';
import actionBar from '@components/ActionBar/config';

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
    hero,
    {
      label: 'Extra Info',
      name: 'info',
      widget: 'object',
      required: false,
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
          required: false,
        },
        {
          name: 'image',
          label: 'Image',
          widget: 'image',
          required: false,
        },
        {
          name: 'description',
          label: 'Description',
          widget: 'text',
          required: false,
        },
        {
          label: 'Links',
          name: 'links',
          widget: 'list',
          fields: [
            {
              name: 'href',
              label: 'URL',
              widget: 'string',
            },
            {
              name: 'title',
              label: 'Title',
              widget: 'string',
              required: false,
            },
          ],
        },
      ],
    },
    {
      label: 'Quotes',
      name: 'quotes',
      widget: 'list',
      required: false,
      fields: [
        {
          name: 'quote',
          label: 'Quote',
          widget: 'string',
        },
        {
          name: 'author',
          label: 'Author',
          widget: 'string',
          required: false,
        },
        {
          name: 'role',
          label: 'Role',
          widget: 'string',
          required: false,
        },
      ],
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
