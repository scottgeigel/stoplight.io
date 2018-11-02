export default {
  label: 'Doc Plans',
  name: 'docPlans',
  widget: 'object',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'markdown',
    },
    {
      label: 'Button Text',
      name: 'buttonText',
      widget: 'text',
    },
    {
      label: 'Button URL',
      name: 'buttonUrl',
      widget: 'text',
    },
    {
      label: 'Features',
      name: 'features',
      widget: 'list',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Plans',
          name: 'plans',
          widget: 'list',
          field: [
            {
              label: 'Title',
              name: 'title',
              widget: 'string',
            },
          ],
        },
      ],
    },
    {
      label: 'Plans',
      name: 'plans',
      widget: 'list',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Price',
          name: 'price',
          widget: 'string',
        },
        {
          label: '# of Domains',
          name: 'domains',
          widget: 'string',
        },
      ],
    },
  ],
};
