import { colors } from 'src/utils';

export default {
  name: 'cta',
  label: 'Call to action',
  widget: 'object',
  required: false,
  fields: [
    {
      name: 'name',
      label: 'Name',
      widget: 'string',
      hint: 'Leave blank to hide',
    },
    {
      label: 'Color',
      name: 'color',
      widget: 'select',
      options: colors,
      default: 'black',
    },
    {
      name: 'href',
      label: 'Link',
      widget: 'string',
      default: 'https://next.stoplight.io',
      hint: 'Default: https://next.stoplight.io',
    },
  ],
};
