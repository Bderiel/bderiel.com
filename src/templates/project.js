import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Carousel } from 'react-responsive-carousel';
import '../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Template({
  data,
}) {
  const { markdownRemark: post } = data;
  const skills = post.frontmatter.skills.split(',');
  const images = post.frontmatter.images.split(',');
  const banner = (
    <section id="project-banner" className="major">
      <div className="fade inner">
        <header className="major">
          <h1>{post.frontmatter.title}</h1>
        </header>
        <div className="content">
          <ul className="actions">
            {skills.map(el => (
              <li><span className="button">{el}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
  return (
    <Fragment>
      <Header />
      {banner}
      <Carousel showArrows>
        {images.map(el => (
            <div className=''>
              <img src={el} />
            </div>
          ))}
      </Carousel>
      <div className="blog-post-container">
        <Helmet title={post.frontmatter.title} />
        <div className="blog-post">
          <h1>About Project:</h1>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        skills
        images
      }
    }
  }
`;

