import React from 'react';
import Link, { withPrefix } from 'gatsby-link';


const Tile = props => (
  <article style={{
    backgroundImage: `url(${props.image})`,
  }
}
  >
    <span className="image" />
    <header className="major">
      <h3><Link to={props.link} className="link">{props.title}</Link></h3>
      <p>{props.description}</p>
    </header>
  </article>
);

export default Tile;
