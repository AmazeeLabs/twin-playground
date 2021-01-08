/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

export const siteMetadata = {
  title: 'Regular Tailwindcss',
  description: 'Regular Tailwindcss example',
  author: '@amazeelabs',
};

export const plugins = [
  'gatsby-plugin-postcss',
  {
    resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
    options: {
      analyzerMode: 'static',
    },
  },
];
