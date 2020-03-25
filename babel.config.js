module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            '> 1%',
            'last 2 Chrome major versions',
            'last 2 Firefox major versions',
            'last 2 Edge major versions',
            'last 2 Safari major versions',
            'ie 11',
            'last 3 Android major versions',
            'last 3 ChromeAndroid major versions',
            'last 2 iOS major versions',
            'last 1 IE versions',
          ],
        },
      },
    ],
    '@babel/react',
    '@babel/preset-typescript',
  ],
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
  ],
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-transform-runtime'],
    },
  },
}
