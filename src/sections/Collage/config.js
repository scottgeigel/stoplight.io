import cta from 'src/components/CallToAction/config';

export default {
  name: 'collage',
  label: 'Collage',
  widget: 'list',
  required: false,
  fields: [
    {
      name: 'description',
      widget: 'markdown',
      required: false,
    },
    {
      name: 'images',
      label: 'Images',
      widget: 'list',
      fields: [
        {
          name: 'src',
          widget: 'image',
        },
        {
          name: 'alt',
          widget: 'string',
        },
      ],
    },
    cta,
  ],
};
