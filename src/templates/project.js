import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import Link, { withPrefix } from 'gatsby-link';
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
        <div className="blurb">
          <p>{post.frontmatter.subtitle}</p>
        </div>
        <div className="content">
          <ul className="actions">
            {skills.map(skill => (
              <li><span className="button">{skill}</span></li>
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
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={3000}
        showArrows={false}
      >
        {images.map(pic => (
          <div className="photo-carousel">
            <img alt="failfish" src={withPrefix(pic)} />
          </div>
        ))}
      </Carousel>
      <div className="blog-post-container">
        <Helmet title={post.frontmatter.title} />
        <div className="blog-post">
          <h1 className="post-title">About Project:</h1>
          <div className="description" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <ul className="actions post-buttons">
          <li><a href={post.frontmatter.projectLink} className="button">Link</a></li>
          <li><a href={post.frontmatter.gitLink} className="icon alt fa-github"><span className="label">GitHub</span></a></li>
        </ul>
      </div>
      <hr />
      <Link to="/" className="button">Home</Link>
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
        subtitle
        gitLink
        projectLink
      }
    }
  }
`;

