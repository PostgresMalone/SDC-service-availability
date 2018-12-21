import React from 'react';

const Summary = ({type, location, reviews}) => {
  return (
    <div>
      <div>
        <span>{type} in {location}</span>
      </div>
      <div>
        <span></span>
      </div>
    </div>
  );
};

export default Summary;