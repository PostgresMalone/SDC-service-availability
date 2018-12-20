import React from 'react';

const Location = ({type, location}) => {
  return (
    <div>
      <Type type={type}/>
      <City location={location}/>
    </div>
  )
};

export default Location;