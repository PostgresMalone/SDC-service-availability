import React from 'react';

const Star = ({ stars }) => {
  if (stars > 4.9) {
    return (
      <div>
        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
      </div>
    );
  } else if (stars > 4.3) {
    return (
      <div>
        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
      </div>
    );
  } else if (stars >= 4) {
    return (
      <div>
        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>
      </div>
    );
  } else if (stars > 3.3) {
    return (
      <div>
        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i>
      </div>
    );
  } else if (stars >= 3) {
    return (
      <div>
        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
      </div>
    );
  } else if (stars > 2.3) {
    return (
      <div>
        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i>
      </div>
    );
  } else if (stars >= 2) {
    return (
      <div>
        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
      </div>
    );
  } else if (stars > 1.3) {
    return (
      <div>
        <i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
      </div>
    );
  } else if (stars >= 1) {
    return (
      <div>
        <i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
      </div>
    );
  } else if (stars > 0.3) {
    return (
      <div>
        <i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
      </div>
    );
  } else if (stars <= 0.4) {
    return (
      <div>
        <i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
      </div>
    );
  } else {
    return null;
  }
};

export default Star;