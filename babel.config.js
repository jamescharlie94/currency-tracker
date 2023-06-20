module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      // '@babel/preset-env',
      // '@babel/preset-react',
      'module:metro-react-native-babel-preset',
    ],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          rootPathPrefix: '~Root',
          rootPathSuffix: 'src',
          extensions: ['.svg'],
        },
      ],

      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
          safe: false,
          allowUndefined: true,
          verbose: false,
        },
      ],
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
    ],
  };
};
