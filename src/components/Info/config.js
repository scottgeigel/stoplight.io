export default {
  label: 'Info',
  name: 'info',
  widget: 'object',
  required: false,
  fields: [
    {
      name: 'title',
      widget: 'string',
      required: false,
    },
    {
      name: 'image',
      widget: 'image',
      required: false,
    },
    {
      name: 'description',
      widget: 'text',
      required: false,
    },
    {
      name: 'items',
      widget: 'list',
      required: false,
      fields: [
        {
          name: 'name',
          widget: 'string',
          required: false,
        },
        {
          name: 'value',
          widget: 'string',
          required: false,
        },
        {
          name: 'href',
          widget: 'string',
          required: false,
        },
      ],
    },
  ],
};
