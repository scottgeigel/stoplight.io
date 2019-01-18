import nodePath from 'path';

import cssLoader from './cssLoader';
import tsLoader from './tsLoader';
import sassLoader from './sassLoader';

export default (config, { stage, defaultLoaders }) => {
  config.module.rules = [
    {
      oneOf: [tsLoader(stage), defaultLoaders.jsLoader, sassLoader(stage), cssLoader(stage), defaultLoaders.fileLoader],
    },
  ];

  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.alias = {
    src: nodePath.resolve(__dirname, '..', 'src'),
  };

  if (stage !== 'node') {
    config.plugins[config.plugins.length - 1].mangle = {
      safari10: true,
    };
  }

  return config;
};
