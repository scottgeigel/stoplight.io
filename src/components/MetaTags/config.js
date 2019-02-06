export default {
  label: 'Meta Tags',
  name: 'meta',
  widget: 'object',
  required: false,
  hint: 'Defaults to the meta tags defined in Site Settings',
  fields: [
    {
      label: 'Favicon',
      name: 'favicon',
      widget: 'image',
    },
    {
      name: 'title',
      label: 'Site Name',
      widget: 'string',
    },
    {
      label: 'description',
      name: 'description',
      widget: 'string',
    },
    {
      label: 'URL',
      name: 'url',
      widget: 'string',
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
    },
    {
      label: 'Robots',
      name: 'robots',
      widget: 'string',
      default: 'index, follow',
    },
    {
      label: 'Canonical',
      name: 'canonical',
      widget: 'string',
      required: false,
    },
    {
      label: 'Twitter',
      name: 'twitter',
      widget: 'object',
      required: false,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'string',
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Username',
          name: 'username',
          widget: 'string',
        },
      ],
    },
  ],
};
