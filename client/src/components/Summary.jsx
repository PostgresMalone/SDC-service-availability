import React from 'react';
import makeStar from '../scripts/starCreator';
import Star from './Star.jsx';

const Summary = ({type, location, reviews, stars}) => {
  return (
    <div>
      <div>
        <span>{type} in {location}</span>
      </div>
      <div>
        <span><Star stars={stars}/> {reviews}</span>
      </div>
    </div>
  );
};

export default Summary;