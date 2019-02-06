import cta from 'src/components/CallToAction/config';

export default {
  name: 'product',
  label: 'Product',
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
    cta,
    {
      name: 'description',
      label: 'Description',
      widget: 'markdown',
      required: false,
    },
  ],
};
