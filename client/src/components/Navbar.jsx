import React from 'react';
import Summary from './Summary.jsx';
import Price from './Price.jsx';
import Book from './Book.jsx';
import style from '../scripts/style.css.js';

const Navbar = ({ type, location, stars, reviews, price, click }) => {
  return (
    <div style={style.navbar}>
      <div>
        <Summary type={type} location={location}
          stars={stars} reviews={reviews}/>
        <Price price={price}/>
        <Book click={click}/>
      </div>
    </div>
  );
};

export default Navbar;