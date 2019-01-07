export default {
  name: 'footer',
  label: 'Footer',
  widget: 'object',
  fields: [
    {
      name: 'columns',
      label: 'Columns',
      widget: 'list',
      required: false,
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
        },
        {
          name: 'links',
          label: 'Links',
          widget: 'list',
          required: false,
          fields: [
            {
              name: 'title',
              label: 'Title',
              widget: 'string',
            },
            {
              name: 'href',
              label: 'Link',
              widget: 'string',
              required: false,
            },
            {
              name: 'onClick',
              label: 'Action',
              widget: 'select',
              required: false,
              options: [{ label: 'Open Intercom', value: 'intercom' }],
            },
          ],
        },
      ],
    },
    {
      name: 'legal',
      label: 'Legal links',
      widget: 'list',
      required: false,
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
        },
        {
          name: 'href',
          label: 'Link',
          widget: 'string',
        },
      ],
    },
    {
      name: 'social',
      label: 'Social Media',
      widget: 'list',
      required: false,
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
        },
        {
          name: 'icon',
          label: 'Icon',
          widget: 'fontawesome-brand',
          type: 'array',
        },
        {
          name: 'href',
          label: 'Link',
          widget: 'string',
          required: false,
        },
      ],
    },
  ],
};
