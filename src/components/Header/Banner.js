import React from 'react';
import Link from 'gatsby-link';

const Banner = () => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Hi, my name is Brian Deriel</h1>
      </header>
      <div className="content">
        <p>Fullstack software engineer, problem solver, and team player.<br />
          I'm constantly looking for new challenges and opportunities to learn.
        </p>
        <ul className="actions">
          <li><a href="#one" className="button next scrolly">Projects</a></li>
        </ul>
      </div>
    </div>
  </section>
);

export default Banner;
