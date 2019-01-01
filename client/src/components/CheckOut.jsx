import React from 'react';
import focusText from '../scripts/focusText.js';

const CheckOut = ({ click, checkout }) => (
  <div>
    <input type="text" readOnly value={checkout ? checkout : 'Check out'}
      onFocus={focusText} onClick={click} className="check-out"></input>
  </div>
);

export default CheckOut;