import React from 'react';
import style from '../scripts/style.css.js';

const Book = ({click}) => (
  <div className='book-container' style={style.bookContainer}>
    <button onClick={click} className="book-button" style={style.bookButton}>
      <span>Book</span>
    </button>
  </div>
);

export default Book;