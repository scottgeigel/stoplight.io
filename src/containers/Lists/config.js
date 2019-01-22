import metaTags from 'src/components/MetaTags/config';
import hero from 'src/components/Hero/config';
import actionBar from 'src/components/ActionBar/config';
import pagination from 'src/components/Pagination/config';

export default {
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
    hero,
    actionBar,
    metaTags,
    pagination,
  ],
};
