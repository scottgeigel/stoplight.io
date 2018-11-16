import nodePath from 'path';

import cssLoader from './cssLoader';
import tsLoader from './tsLoader';
import sassLoader from './sassLoader';

export default (config, { stage, defaultLoaders }) => {
  config.module.rules = [
    {
      oneOf: [
        tsLoader(stage),
        defaultLoaders.jsLoader,
        sassLoader(stage),
        cssLoader(stage),
        defaultLoaders.fileLoader,
      ],
    },
  ];

  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.alias = {
    '@containers': nodePath.resolve(__dirname, '..', 'src/containers'),
    '@components': nodePath.resolve(__dirname, '..', 'src/components'),
    '@styles': nodePath.resolve(__dirname, '..', 'src/styles'),
    '@utils': nodePath.resolve(__dirname, '..', 'src/utils'),
  };

  if (stage !== 'node') {
    config.plugins[config.plugins.length - 1].mangle = {
      safari10: true,
    };
  }

  return config;
};
