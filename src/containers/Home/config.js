import hero from 'src/components/Hero/config';
import metaTags from 'src/components/MetaTags/config';

import collage from 'src/sections/Collage/config';
import imageCallout from 'src/sections/ImageCallout/config';
import testimonials from 'src/sections/Testimonials/config';

export default {
  label: 'Home',
  name: 'home',
  file: 'netlify/pages/home.yaml',
  fields: [hero, collage, imageCallout, testimonials, metaTags],
};
