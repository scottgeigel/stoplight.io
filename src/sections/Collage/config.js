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
          label: 'Image',
          name: 'src',
          widget: 'image',
        },
        {
          label: 'alt',
          name: 'alt',
          widget: 'string',
        },
      ],
    },
    cta,
  ],
};
