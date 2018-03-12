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
  }, 'gatsby-plugin-react-next', 'gatsby-transformer-remark', 'gatsby-plugin-react-helmet', 'gatsby-plugin-sass'],
  // pathPrefix: '/bderiel.com',
};

