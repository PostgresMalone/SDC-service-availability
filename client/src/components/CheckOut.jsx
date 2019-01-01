import React from 'react';
import focusText from '../scripts/focusText.js';

const CheckOut = ({click}) => (
  <div>
    <input type="text" readOnly value="Check out" 
      onFocus={focusText} onClick={click} className="check-out"></input>
  </div>
);

export default CheckOut;