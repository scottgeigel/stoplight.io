import actionBar from 'src/components/ActionBar/config';
import container from 'src/components/Container/config';

export default {
  name: 'testimonials',
  label: 'Testimonial Section',
  widget: 'object',
  required: false,
  fields: [
    ...container.fields,
    {
      name: 'testimonials',
      label: 'Testimonials',
      widget: 'list',
      required: false,
      fields: [
        {
          name: 'image',
          label: 'image',
          widget: 'image',
        },
        {
          name: 'quote',
          label: 'quote',
          widget: 'string',
        },
        {
          name: 'author',
          label: 'author',
          widget: 'string',
        },
        {
          name: 'company',
          label: 'company',
          widget: 'string',
        },
        {
          name: 'role',
          label: 'role',
          widget: 'string',
        },
      ],
    },
    actionBar,
  ],
};
