module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [{
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'src',
      path: `${__dirname}/src/`,
    },
  },
  {
    resolve: 'gatsby-plugin-google-tagmanager',
    options: {
      id: 'UA-115539133-1',
      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,
    },
  },
  'gatsby-plugin-react-next', 'gatsby-transformer-remark', 'gatsby-plugin-react-helmet', 'gatsby-plugin-sass',
  ],
};

