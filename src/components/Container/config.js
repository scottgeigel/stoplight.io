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
      label: 'Description',
      widget: 'string',
      required: false,
    },
    cta,
  ],
};
