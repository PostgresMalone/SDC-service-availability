import React from 'react';
import Summary from './Summary.jsx';
import Price from './Price.jsx';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const date = new Date;
    // console.log(this.props.year);
    const price = this.props.year[date.getMonth()][date.getDate()]['price'];
    // console.log(price);

    return (
      <div>
        <Summary type={this.props.type} location={this.props.location}
        stars={this.props.stars} reviews={this.props.reviews}/>
        <Price price={price}/>
        <Book click={this.props.click}/>
      </div>
    );
  }
    
}

export default Navbar;