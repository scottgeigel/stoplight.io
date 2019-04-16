import metaTags from 'src/components/MetaTags/config';

import actionBar from 'src/components/ActionBar/config';
import hero from 'src/components/Hero/config';

import businesses from 'src/sections/Businesses/config';
import collage from 'src/sections/Collage/config';
import press from 'src/sections/PressSection/config';

export default {
  label: 'About',
  name: 'about',
  file: 'netlify/pages/about.yaml',
  fields: [
    {
      label: 'path',
      name: 'path',
      widget: 'string',
    },
    hero,
    {
      label: 'Team',
      name: 'team',
      widget: 'list',
      fields: [
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Name',
          name: 'name',
          widget: 'string',
        },
        {
          label: 'Role',
          name: 'role',
          widget: 'string',
        },
      ],
    },
    businesses,
    press,
    collage,
    actionBar,
    metaTags,
  ],
};
