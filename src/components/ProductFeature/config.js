export default {
  name: 'feature',
  label: 'Product Feature',
  widget: 'object',
  required: false,
  fields: [
    {
      name: 'title',
      label: 'Title',
      widget: 'string',
    },
    {
      name: 'titleURL',
      label: 'Title URL',
      widget: 'string',
      required: false,
    },
    {
      name: 'image',
      label: 'Image',
      widget: 'image',
    },
    {
      name: 'description',
      label: 'Description',
      widget: 'markdown',
    },
    {
      name: 'href',
      label: 'Link',
      widget: 'string',
    },
  ],
};
