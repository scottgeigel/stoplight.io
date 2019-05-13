import cta from 'src/components/CallToAction/config';

export default {
  name: 'collage',
  label: 'Collage',
  widget: 'object',
  required: false,
  fields: [
    {
      name: 'title',
      widget: 'string',
      required: false,
    },
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
