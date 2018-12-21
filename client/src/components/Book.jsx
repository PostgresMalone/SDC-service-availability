import React from 'react';

const Book = ({click}) => (
  <div>
    <button onClick={click}>
      <span>Request to Book</span>
    </button>
  </div>
);

export default Book;