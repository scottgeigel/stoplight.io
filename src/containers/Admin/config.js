import AboutConfig from '@containers/About/config';
import HomeConfig from '@containers/Home/config';
import SubpageConfig from '@containers/Subpage/config';
import PricingConfig from '@containers/Pricing/config';
import LandingConfig from '@containers/Landing/config';
import SettingsConfig from '@components/Settings/config';
import CaseStudyConfig from '@containers/CaseStudy/config';
import CaseStudiesConfig from '@containers/CaseStudies/config';

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
    LandingConfig,
    CaseStudyConfig,
    SubpageConfig,
  ],
};
