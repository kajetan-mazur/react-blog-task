import React from 'react';

const Gif = props => (
  <li className="gif-wrap">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
  </li>
);

export default Gif;