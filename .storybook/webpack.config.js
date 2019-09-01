const path = require('path')
const prism = require('markdown-it-prism');
const highlightLines = require('markdown-it-highlight-lines');
const linkAttributes = require('markdown-it-link-attributes');

module.exports = ({ config }) => {
  config.resolve.alias['vue-fns'] = path.join(__dirname, '..')

  config.module.rules.push({
    test: /\.md$/,
    use: [
      {
        loader: require.resolve('markdown-it-loader'),
        options: {
          use: [
            prism,
            highlightLines,
            [
              linkAttributes,
              {
                pattern: /^https?:/,
                attrs: {
                  class: 'external-link',
                  target: '_blank',
                },
              },
            ],
          ],
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: ['@babel/env', '@babel/typescript', '@vue/jsx'],
        },
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
