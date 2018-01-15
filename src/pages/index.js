import React, { Fragment } from 'react';
import Link from 'gatsby-link';

import Header from '../components/Header';
import Banner from '../components/Header/Banner';
import AllProjects from '../components/Tiles';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Fragment>
    <Header />
    <Banner />
    <AllProjects />
    <Footer />
  </Fragment>
);

export default IndexPage;
