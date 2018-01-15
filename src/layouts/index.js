import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../../public/assets/css/main.css';
import './index.scss';

const Main = ({ children }) => (
  <div id="wrapper">
    <Helmet
      title="Brian's Personal Site"
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
