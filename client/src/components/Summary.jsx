import React from 'react';
import makeStar from '../scripts/starCreator';

const Summary = ({type, location, reviews, stars}) => {
  const star = makeStar(stars);
  return (
    <div>
      <div>
        <span>{type} in {location}</span>
      </div>
      <div>
        <span>{star} {reviews}</span>
      </div>
    </div>
  );
};

export default Summary;