import React from 'react';
import Star from './Star.jsx';

const Summary = ({type, location, reviews, stars}) => {
  console.log(stars);
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