export default {
  name: 'pagination',
  label: 'Pagination',
  widget: 'object',
  fields: [
    {
      name: 'enabled',
      label: 'Enabled?',
      widget: 'boolean',
      default: false,
      hint: 'Default: false',
    },
    {
      name: 'color',
      label: 'Color',
      widget: 'string',
      default: 'blue-light',
      hint: 'Default: blue-light',
    },
    {
      name: 'backgroundColor',
      label: 'BackgroundColor',
      widget: 'string',
      default: 'white',
      hint: 'Default: white',
    },
    {
      name: 'borderColor',
      label: 'BorderColor',
      widget: 'string',
      default: 'grey-light',
      hint: 'Default: grey-light',
    },
  ],
};
