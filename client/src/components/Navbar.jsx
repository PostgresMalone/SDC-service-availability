import React from 'react';
import Summary from './Summary.jsx';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Summary type={this.props.type} location={this.props.location}
        stars={this.props.stars} reviews={this.props.reviews}/>
        {/* <Review />
        <Book /> */}
      </div>
    );
  }
    
}

export default Navbar;