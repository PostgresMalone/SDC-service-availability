import React from 'react';
import focusText from '../scripts/focusText.js';

const CheckOut = ({click}) => (
  <div>
    <input type="text" readOnly value="Check Out" 
      onFocus={focusText} onClick={click}></input>
  </div>
);

export default CheckOut;