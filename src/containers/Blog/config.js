import hero from '@components/Hero/config';
import actionBar from '@components/ActionBar/config';
import metaTags from '@components/MetaTags/config';
import pagination from '@components/Pagination/config';

export default {
  label: 'Blog',
  name: 'blog',
  file: 'netlify/pages/blog.yaml',
  fields: [
    {
      label: 'path',
      name: 'path',
      widget: 'string',
    },
    hero,
    actionBar,
    metaTags,
    pagination,
  ],
};
