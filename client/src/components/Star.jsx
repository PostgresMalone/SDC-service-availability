import React from 'react';

const Star = ({ star }) => {
  if (star > 0.4) {
    return ( 
      <i class="fas fa-star-half-alt"></i> 
    );
  } else if (star > 1) {
    return (
      <i class="fas fa-star"></i> 
    );
  } else if (star > 1.4) {
    return (
      <div>
        <i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
      </div>
    );
  } else if (star > 2) {
    return (
      <div>
        <i class="fas fa-star"></i><i class="fas fa-star"></i>
      </div>
    );
  }  else if (star > 2.4) {
    return (
      <div>
        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
      </div>
    );
  }  else if (star > 3) {
    return (
      <div>
        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
      </div>
    );
  }  else if (star > 3.4) {
    return (
      <div>
        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
      </div>
    );
  }  else if (star > 4) {
    return (
      <div>
        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
      </div>
    );
  }  else if (star > 4.4) {
    return (
      <div>
        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
      </div>
    );
  }  else if (star > 4.9) {
    return (
      <div>
        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
      </div>
    );
  } else {
    return null;
  }
};

export default Star;