import React from 'react';
import Link from 'gatsby-link';


const Tile = props => (
  <article>
    <span className="image">
      <img src={props.image} alt="" />
    </span>
    <header className="major">
      <h3><Link to={props.link} className="link">{props.title}</Link></h3>
      <p>{props.description}</p>
    </header>
  </article>
);

export default Tile;
