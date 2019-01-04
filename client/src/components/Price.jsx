import React from 'react';
import style from '../scripts/style.css.js';

const Price = ({price}) => (
  <div className="price-container" style={style.priceContainer}>
    <div className="price-container-inner" style={style.priceContainerInner}>
      <div className="price-display" style={style.priceDisplay}>
        <span className="price-num" style={style.priceNum}>
          ${price}
        </span> 
        <span className="night" style={style.night}>/ night</span>
      </div>
    </div>
  </div>
);

export default Price;