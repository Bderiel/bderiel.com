import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../../public/static/assets/css/main.css';

const Main = ({ children }) => (
  <div id="wrapper">
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children()}
  </div>
);

Main.propTypes = {
  children: PropTypes.func,
};

export default Main;
