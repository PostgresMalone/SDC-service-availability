import React from 'react';
import Summary from './Summary.jsx';
import Price from './Price.jsx';
import Book from './Book.jsx';

const Navbar = ({ type, location, stars, reviews, price, click }) => {
  return (
    <div>
      <Summary type={type} location={location}
        stars={stars} reviews={reviews}/>
      <Price price={price}/>
      <Book click={click}/>
    </div>
  );
}

export default Navbar;