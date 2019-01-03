import React from 'react';
import Star from './Star.jsx';
import style from '../scripts/style.css.js';

const Summary = ({type, location, reviews, stars}) => {
  return (
    <div className="summary" style={style.summary}>
      <div className="location-container" style={style.locationContainer}>
        <span className="location-type" style={style.locationType}>{type} in {location}</span>
      </div>
      <div className="star-container" style={style.starContainer}>
        <span className="star-review-span" style={style.starReviewSpan}>
          <span className="stars" style={style.stars}><Star stars={stars}/></span>
          <span className="review-num" style={style.reviewNum}>{reviews}</span>
        </span>
      </div>
    </div>
  );
};

export default Summary;