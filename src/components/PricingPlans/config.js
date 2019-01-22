import button from 'src/components/Button/config';

export default {
  label: 'Pricing Plans',
  name: 'pricingPlans',
  widget: 'list',
  fields: [
    {
      name: 'title',
      label: 'Title',
      widget: 'string',
    },
    {
      name: 'description',
      label: 'Description',
      widget: 'markdown',
    },
    {
      name: 'price',
      label: 'Price',
      widget: 'string',
    },
    {
      label: 'Features',
      name: 'features',
      widget: 'list',
      field: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
      ],
    },
    button,
    {
      label: 'Price Unit',
      name: 'unit',
      widget: 'string',
      required: false,
    },
  ],
};
