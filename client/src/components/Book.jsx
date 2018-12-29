import React from 'react';

const Book = ({click}) => (
  <div>
    <button onClick={click} className="show-modal">
      <span>Request to Book</span>
    </button>
  </div>
);

export default Book;