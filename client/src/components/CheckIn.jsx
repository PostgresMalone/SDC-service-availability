import React from 'react';
import focusText from '../scripts/focusText.js';
import style from '../scripts/style.css.js';

const CheckIn = ({ click, checkin }) => (
  <div style={style.checkBox}>
    <input 
      type="text" 
      readOnly 
      value={checkin ? checkin : 'Check in'} 
      onFocus={focusText} 
      onClick={click} 
      className="check-in"
      style={style.inputBox}  
    ></input>
  </div>
);

export default CheckIn;