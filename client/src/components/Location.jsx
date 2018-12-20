import React from 'react';
import City from './City.jsx';
import Type from './Type.jsx';

const Location = ({type, location}) => {
  return (
    <div>
      <Type type={type}/>
      <City location={location}/>
    </div>
  )
};

export default Location;