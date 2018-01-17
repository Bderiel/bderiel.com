import React from 'react';

import Tile from './Tile';


export default (props) => {
  return (
    <div id="main">
      <section id="one" className="tiles">
        {props.data.map(el => {
          const prefix = el.node.frontmatter
         return (<Tile title={prefix.title} link={prefix.path} image={prefix.preview} description={prefix.subtitle} />)
        })
       }
      </section>
    </div>
  );
};

// pass image in props

// export default AllProjects;

