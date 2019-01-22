import SettingsConfig from 'src/components/Settings/config';

import AboutConfig from 'src/containers/About/config';
import HomeConfig from 'src/containers/Home/config';
import PricingConfig from 'src/containers/Pricing/config';

import FormConfig from 'src/containers/Form/config';
import LandingConfig from 'src/containers/Landing/config';
import ListsConfig from 'src/containers/Lists/config';
import SubpageConfig from 'src/containers/Subpage/config';

export const AuthorConfig = {
  ...SubpageConfig,
  label: 'Authors',
  label_singular: 'Author',
  name: 'author',
  folder: 'netlify/authors',
  fields: [
    {
      label: 'Name',
      name: 'name',
      widget: 'string',
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'file',
    },
    ...SubpageConfig.fields,
  ],
};

export const CaseStudyConfig = {
  ...SubpageConfig,
  label: 'Case Studies',
  label_singular: 'Case Study',
  name: 'caseStudy',
  folder: 'netlify/case-studies',
};

export const BlogPostConfig = {
  ...SubpageConfig,
  label: 'Blog Posts',
  label_singular: 'Blog Post',
  name: 'blogPost',
  folder: 'netlify/blog-posts',
  fields: [
    {
      label: 'Author',
      name: 'author',
      widget: 'relation',
      collection: 'authors',
      searchFields: ['name'],
      valueField: 'name',
    },
    {
      label: 'Created At',
      name: 'createdAt',
      widget: 'date',
      dateFormat: 'MMM DD, YYYY',
    },
    ...SubpageConfig.fields,
  ],
};

export const config = {
  backend: {
    name: 'git-gateway',
    branch: 'develop',
    squash_merges: true,
    commit_messages: {
      create: 'Create {{collection}} “{{slug}}”',
      update: 'Update {{collection}} “{{slug}}”',
      delete: 'Delete {{collection}} “{{slug}}”',
      uploadMedia: 'Upload “{{path}}”',
      deleteMedia: 'Delete “{{path}}”',
    },
  },
  publish_mode: 'editorial_workflow',
  media_folder: 'public/images',
  public_folder: '/images',
  display_url: 'https://stoplight.io',
  site_domain: 'cms.netlify.com',
  collections: [
    SettingsConfig,
    {
      label: 'Pages',
      label_singular: 'Page',
      name: 'pages',
      delete: false,
      files: [AboutConfig, HomeConfig, PricingConfig],
    },
    FormConfig,
    LandingConfig,
    ListsConfig,
    SubpageConfig,
    AuthorConfig,
    CaseStudyConfig,
    BlogPostConfig,
  ],
};
