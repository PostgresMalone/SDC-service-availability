import React from 'react';
import Summary from './Summary.jsx';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Summary type={this.props.type} location={this.props.location}/>
        {/* <Review />
        <Book /> */}
      </div>
    );
  }
    
}

export default Navbar;