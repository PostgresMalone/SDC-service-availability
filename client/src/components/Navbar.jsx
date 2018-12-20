import React from 'react';
import Location from './Location.jsx';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      location: '',
      reviewsummary: '' 
    };
  }

  render() {
    return (
      <div>
        <Location type={this.state.type}/>
        <Review />
        <Book /> */}
      </div>
    )
  }
    
}

export default Navbar;