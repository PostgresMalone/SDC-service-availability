import React from 'react';
import Summary from './Summary.jsx';
import Price from './Price.jsx';
import Book from './Book.jsx';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const date = new Date;
    const price = this.props.year[date.getMonth()][date.getDate()]['price'];

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