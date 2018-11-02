import AboutConfig from '@containers/About/config';
import HomeConfig from '@containers/Home/config';
import SubpageConfig from '@containers/Subpage/config';
import PricingConfig from '@containers/Pricing/config';
import ProductConfig from '@containers/Product/config';
import SettingsConfig from '@components/Settings/config';
import CaseStudyConfig from '@containers/CaseStudy/config';
import CaseStudiesConfig from '@containers/CaseStudies/config';

import Home from '@containers/Home';
import About from '@containers/About';
import CaseStudy from '@containers/CaseStudy';
import CaseStudies from '@containers/CaseStudies';
import Subpage from '@containers/Subpage';
import Pricing from '@containers/Pricing';
import Product from '@containers/Product';
import Settings from '@components/Settings';

export const templates = {
  home: Home,
  about: About,
  subpage: Subpage,
  pricing: Pricing,
  products: Product,
  settings: Settings,
  caseStudy: CaseStudy,
  caseStudies: CaseStudies,
};

export const config = {
  backend: {
    name: 'git-gateway',
    branch: 'develop',
    squash_merges: true,
    commit_messages: {
      create: 'Create {{collection}} “{{slug}}”',
      update: 'Update {{collection}} “{{slug}}”',
      delete: 'Delete {{collection}} “{{slug}}”',
      uploadMedia: 'Upload “{{path}}”',
      deleteMedia: 'Delete “{{path}}”',
    },
  },
  publish_mode: 'editorial_workflow',
  media_folder: 'public/images',
  public_folder: '/images',
  display_url: 'https://stoplight.io',
  site_domain: 'cms.netlify.com',
  collections: [
    SettingsConfig,
    {
      label: 'Pages',
      label_singular: 'Page',
      name: 'pages',
      delete: false,
      files: [AboutConfig, HomeConfig, PricingConfig, CaseStudiesConfig],
    },
    ProductConfig,
    CaseStudyConfig,
    SubpageConfig,
  ],
};
