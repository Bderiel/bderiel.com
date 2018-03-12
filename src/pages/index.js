import React, { Fragment } from 'react';
import Link from 'gatsby-link';

import Header from '../components/Header';
import Banner from '../components/Header/Banner';
import AllProjects from '../components/Tiles';
import Footer from '../components/Footer';

const IndexPage = ({ data }) => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <AllProjects data={data.allMarkdownRemark.edges} />
      <Footer />
    </Fragment>
  );
};

export default IndexPage;

export const homeQuery = graphql`
  query homeQuery{
    allMarkdownRemark {
    edges {
      node {
        id
         frontmatter {
          title
          subtitle
          path
          preview
         }
      }
    }
  }
  }
`;
