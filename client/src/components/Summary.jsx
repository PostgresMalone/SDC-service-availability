import React from 'react';

const Summary = ({type, location}) => {
  return (
    <div>
      <span>{type} in {location}</span>
    </div>
  );
};

export default Summary;