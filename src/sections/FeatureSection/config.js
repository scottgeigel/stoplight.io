import actionBar from 'src/components/ActionBar/config';
import container from 'src/components/Container/config';

export default {
  name: 'featureSection',
  label: 'Feature Section',
  widget: 'object',
  required: false,
  hint: 'A list of features with text on one side and image on the other',
  fields: [
    ...container.fields,
    {
      name: 'features',
      widget: 'list',
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
        },
        {
          name: 'shortName',
          label: 'Short name',
          widget: 'string',
        },
        {
          name: 'titleURL',
          label: 'Title URL',
          widget: 'string',
          required: false,
        },
        {
          name: 'image',
          label: 'Image',
          widget: 'image',
        },
        {
          name: 'description',
          label: 'Description',
          widget: 'markdown',
        },
        {
          name: 'href',
          label: 'Link',
          widget: 'string',
        },
      ],
    },
    actionBar,
  ],
};
