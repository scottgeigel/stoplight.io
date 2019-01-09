import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default stage => {
  let loaders = [
    {
      loader: require.resolve('css-loader'),
      options: {
        minimize: stage !== 'dev',
        sourceMap: stage === 'dev',
        importLoaders: 1,
      },
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebookincubator/create-react-app/issues/2677
        sourceMap: true,
        ident: 'postcss',
        plugins: () => [
          postcssFlexbugsFixes,
          autoprefixer({
            browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9', // React doesn't support IE8 anyway
            ],
            flexbox: 'no-2009',
          }),
          tailwindcss(path.resolve(__dirname, '../tailwind.config.js')),
        ],
      },
    },
  ];

  if (stage === 'dev') {
    loaders = [require.resolve('style-loader')].concat(loaders);
  } else if (stage === 'prod') {
    loaders = ExtractTextPlugin.extract({
      fallback: {
        loader: require.resolve('style-loader'),
        options: {
          sourceMap: false,
          hmr: false,
        },
      },
      use: loaders,
    });
  }

  return {
    test: /\.css$/,
    use: loaders,
  };
};
