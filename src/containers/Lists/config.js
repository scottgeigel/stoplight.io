import metaTags from 'src/components/MetaTags/config';
import actionBar from 'src/components/ActionBar/config';
import pagination from 'src/components/Pagination/config';

import { addFields } from 'src/utils';

export const ListsConfig = {
  label: 'Lists',
  label_singular: 'List',
  name: 'lists',
  folder: 'netlify/lists',
  create: true,
  delete: true,
  slug: '{{slug}}',
  extension: 'yaml',
  fields: [
    {
      label: 'URL Path',
      name: 'path',
      widget: 'string',
    },
    {
      label: 'Tag',
      name: 'tag',
      widget: 'string',
    },
    {
      name: 'title',
      widget: 'string',
    },
    {
      name: 'subtitle',
      widget: 'string',
    },
    {
      name: 'color',
      widget: 'string',
    },
    {
      name: 'buttons',
      widget: 'list',
      fields: [
        {
          name: 'title',
          widget: 'string',
        },
        {
          name: 'href',
          widget: 'string',
        },
      ],
    },
    actionBar,
    metaTags,
    pagination,
  ],
};

export const AuthorConfig = {
  ...ListsConfig,
  label: 'Authors',
  label_singular: 'Author',
  name: 'author',
  folder: 'netlify/authors',
  fields: addFields(ListsConfig.fields, 4, [
    {
      label: 'Author Title',
      name: 'pageName',
      widget: 'string',
      required: false,
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'file',
    },
  ]),
};
