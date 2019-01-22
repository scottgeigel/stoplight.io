import cta from 'src/components/CallToAction/config';

export default {
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
    cta,
  ],
};
