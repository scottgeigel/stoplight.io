import info from 'src/components/Info/config';
import metaTags from 'src/components/MetaTags/config';
import actionBar from 'src/components/ActionBar/config';
import quote from 'src/components/Quote/config';

import { addFields, colors } from 'src/utils';

export const SubpageConfig = {
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
    {
      label: 'Related Tags',
      name: 'relatedTags',
      widget: 'list',
      required: false,
    },
    {
      label: 'Publish Date',
      name: 'publishDate',
      widget: 'date',
      dateFormat: 'MMM DD, YYYY',
      required: false,
    },
    {
      label: 'Author',
      name: 'author',
      widget: 'relation',
      collection: 'authors',
      searchFields: ['name'],
      valueField: 'name',
      required: false,
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: false,
    },
    {
      label: 'SubTitle',
      name: 'subtitle',
      widget: 'string',
      required: false,
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'file',
      required: false,
    },
    {
      label: 'Color',
      name: 'color',
      widget: 'select',
      options: colors,
      default: 'black',
      required: false,
    },
    {
      label: 'Content',
      name: 'body',
      widget: 'markdown',
      required: false,
    },
    actionBar,
    metaTags,
  ],
};

export const CaseStudyConfig = {
  ...SubpageConfig,
  label: 'Case Studies',
  label_singular: 'Case Study',
  name: 'caseStudy',
  folder: 'netlify/case-studies',
  fields: addFields(SubpageConfig.fields, 9, [
    {
      label: 'Sidebar',
      name: 'sidebar',
      widget: 'object',
      fields: [info, quote],
    },
  ]),
};

export const BlogPostConfig = {
  ...SubpageConfig,
  label: 'Blog Posts',
  label_singular: 'Blog Post',
  name: 'blogPost',
  folder: 'netlify/blog-posts',
  fields: addFields(SubpageConfig.fields, 9, [
    {
      name: 'disqus',
      widget: 'object',
      required: false,
      fields: [
        {
          label: 'Enabled?',
          name: 'enabled',
          widget: 'boolean',
          required: false,
        },
      ],
    },
  ]),
};
