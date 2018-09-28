import React from 'react';

const Image = (props) => 
  <img src={props.src} alt={props.name} className="img-thumbnail clickable-images" onClick={() => props.pickImg(props.name)} />


export default Image;