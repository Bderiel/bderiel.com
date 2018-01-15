import React, { Component } from 'react';
import Link from 'gatsby-link';

class Banner extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.querySelector('#one').scrollIntoView({
      behavior: 'smooth',
    });
  }
  
  render() {
    return (<section id="banner" className="major">
      <div className="fade inner">
        <header className="major">
          <h1>Brian Deriel</h1>
        </header>
        <div className="content">
          <p>Fullstack software engineer, problem solver, and team player.<br />
            I'm constantly looking for new challenges and opportunities to learn.
          </p>
          <ul className="actions">
            <li onClick={this.handleClick}><span className="button next scrolly">Projects</span></li>
          </ul>
        </div>
      </div>
            </section>
    );
  }
}

export default Banner;
