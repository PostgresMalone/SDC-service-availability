import React from 'react';
import Count from './Count.jsx';

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGuests: false,
      total: 1,
      adults: 1,
      children: 0,
      infants: 0
    }
  }

  render() {
    guests = this.state.total > 1 ? 'guests' : 'guest';
    return (
      <div>
        <div>Guests</div>
        <div>
          <button onClick={() => this.showGuests()}>
            <div>
              <span>{this.state.numGuests} {guests}</span>
            </div>
              <span>
                {this.state.showGuests
                  ? '^'
                  : 'v'}
              </span>
          </button>
          {this.state.showGuests
            ? <Count />
            : <div></div>}
        </div>
      </div>
    )
  }

  showGuests() {
    this.setState({showGuests: true});
  }
}

export default Guests;