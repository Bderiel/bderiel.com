import React from 'react';

import SmallTile from './SmallTile';
import LongTile from './LongTile';


const AllProjects = () => (
  <div id="main">
    <section id="one" className="tiles">
      <SmallTile />
      <LongTile />
      <SmallTile />
      <LongTile />
    </section>
  </div>
);

// pass image in props

export default AllProjects;
