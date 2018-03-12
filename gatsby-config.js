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
  }, 'gatsby-plugin-react-next', 'gatsby-transformer-remark', 'gatsby-plugin-react-helmet', 'gatsby-plugin-sass',
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-115539133-1',
      // Puts tracking script in the head instead of the body
      head: false,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
    },
  }],
};

// const t =
