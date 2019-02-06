import container from 'src/components/Container/config';

export default {
  label: 'Press Section',
  name: 'pressSection',
  widget: 'object',
  fields: [
    ...container.fields,
    {
      label: 'Articles',
      name: 'articles',
      widget: 'list',
      fields: [
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Month, Year',
          name: 'date',
          widget: 'string',
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'text',
        },
        {
          label: 'Publication',
          name: 'publication',
          widget: 'string',
        },
        {
          label: 'Link',
          name: 'href',
          widget: 'string',
        },
      ],
    },
  ],
};
