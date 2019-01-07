import hero from '@components/Hero/config';
import metaTags from '@components/MetaTags/config';
import actionBar from '@components/ActionBar/config';

export default {
  label: 'Blog',
  label_singular: 'Blog Post',
  name: 'blog',
  folder: 'netlify/blog-posts',
  create: true,
  delete: false,
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
      label: 'Company Info',
      name: 'info',
      widget: 'object',
      fields: [
        {
          name: 'name',
          label: 'Company Name',
          widget: 'string',
        },
        {
          name: 'logo',
          label: 'Company Logo',
          widget: 'image',
        },
        {
          name: 'about',
          label: 'Company Description',
          widget: 'text',
        },
        {
          name: 'industry',
          label: 'Company Industry',
          widget: 'string',
        },
        {
          name: 'location',
          label: 'Company Location',
          widget: 'string',
        },
        {
          name: 'employees',
          label: 'Number of Employees',
          widget: 'string',
        },
      ],
    },
    {
      label: 'Quotes',
      name: 'quotes',
      widget: 'list',
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
        },
        {
          name: 'role',
          label: 'Role',
          widget: 'string',
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
