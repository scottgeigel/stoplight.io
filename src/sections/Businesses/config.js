import container from 'src/components/Container/config';

export default {
  label: 'Businesses',
  name: 'businesses',
  widget: 'object',
  fields: [
    ...container.fields,
    {
      name: 'quotes',
      fields: [
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Quote',
          name: 'quote',
          widget: 'text',
        },
        {
          label: 'Company',
          name: 'company',
          widget: 'string',
        },
        {
          label: 'Author',
          name: 'author',
          widget: 'string',
        },
        {
          label: 'Role',
          name: 'role',
          widget: 'string',
        },
      ],
    },
  ],
};
