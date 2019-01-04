import React from 'react';
import focusText from '../scripts/focusText.js';
import style from '../scripts/style.css.js';

const CheckOut = ({ click, checkout }) => (
  <div style={style.checkBox}>
    <input 
      type="text" 
      readOnly 
      value={checkout ? checkout : 'Check out'}
      onFocus={focusText} 
      onClick={click} 
      className="check-out"
      style={style.inputBox}
    ></input>
  </div>
);

export default CheckOut;