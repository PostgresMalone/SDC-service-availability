import React from 'react';
import focusText from '../scripts/focusText.js';

const CheckIn = ({click, checkin}) => (
  <div>
    <input type="text" readOnly value={checkin ? checkin : 'Check in'} 
      onFocus={focusText} onClick={click} className="check-in"></input>
  </div>
);

export default CheckIn;