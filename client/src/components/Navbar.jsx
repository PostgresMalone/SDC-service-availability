import React from 'react';
import Summary from './Summary.jsx';
import Price from './Price.jsx';
import Book from './Book.jsx';
import style from '../scripts/style.css.js';

const Navbar = ({ type, location, stars, reviews, price, click }) => {
  return (
    <div className="navbar" style={style.navbar}>
      <div className="inner1-navbar" style={style.innerNavbar}>
        <div className="inner2-navbar" style={style.innerNavbar2}>
          <div className="table-navbar" style={style.tableNavbar}>
            <div style={style.cellOtherNavbar}>
            <Summary type={type} location={location}
              stars={stars} reviews={reviews}/>
            </div>
            <div className="divider" style={style.cellOtherNavbar}>
              <div className="vertical-line" style={style.verticalLine}></div>
            </div>
            <div style={style.cellOtherNavbar}>
              <Price price={price}/>
            </div>
            <div style={style.cellOtherNavbar}>
              <Book click={click}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;