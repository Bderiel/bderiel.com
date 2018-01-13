import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Banner from '../components/Header/Banner';
import AllProjects from '../components/Items';
import Footer from '../components/Footer';
import '../../public/static/assets/css/main.css';

const Main = ({ children }) => (
  <div id="wrapper">
    <Header />
    <Banner />
    <AllProjects />
    <Footer />
  </div>
);

Main.propTypes = {
  children: PropTypes.func,
};

export default Main;
