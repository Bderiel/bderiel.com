import React, { Component } from 'react';
import Link from 'gatsby-link';

const quotes = ['I AM A SOFTWARE ENGINEER', 'I AM A PROBLEM SOLVER', 'I AM A TEAM PLAYER', 'I AM AVAILABLE FOR HIRE', 'I AM JSMASTER', 'ARE YOU STILL HERE?', 'I THINK KANYE IS A GENIUS', 'HOW MANY OF THESE DID HE WRITE?'];
import mugshot from '../../../img/mugshot.jpg';

class Banner extends Component {
  constructor() {
    super();
    this.state = {
      quoteIdx: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleAnimation = this.handleAnimation.bind(this);
  }


  handleClick() {
    document.querySelector('#one').scrollIntoView({
      behavior: 'smooth',
    });
  }
  handleAnimation(evt) {
    if (evt.animationName === 'typing') {
      this.setState({ quoteIdx: this.state.quoteIdx += 1 });
    }
  }

  render() {
    const { quoteIdx } = this.state;
    return (
      <section id="banner" className="major">
        <div className="fade inner">
          <header className="major">
            <h1>Brian Deriel</h1>
          </header>
          <div className="content">
            <div onAnimationIteration={this.handleAnimation} className="typewriter">
              <p id="bio">{quotes[quoteIdx % quotes.length]}</p>
            </div>
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
