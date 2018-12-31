import React from 'react';
import Count from './Count.jsx';
import focusText from '../scripts/focusText.js';

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGuests: false,
      total: this.state.adults + this.state.children + this.state.infants,
      adults: 1,
      children: 0,
      infants: 0
    }
  }

  showGuests() {
    this.setState({showGuests: true});
  }

  render() {
    const total = this.state.total;
    const adults = this.state.adults;
    const children = this.state.children;
    const infants = this.state.infants;
    const guests = total > 1 ? 'guests' : 'guest';
    return (
      <div>
        <div>Guests</div>
        <div>
          <div onClick={() => this.showGuests()}>
            <div>
              <input readOnly type="text" onClick={(e) => focusText(e)}
              className="show-count" value={`${this.state.total} ${guests}`}></input>
            </div>
              <span>
                {this.state.showGuests
                  ? <i className="fas fa-chevron-up"></i>
                  : <i className="fas fa-chevron-down"></i>}
              </span>
          </div>
          {this.state.showGuests
            ? <Count adults={adults} children={children} infants={infants}/>
            : <div></div>}
        </div>
        <button onClick={() => console.log(this.state)}>Test</button>
      </div>
    )
  }
}

export default Guests;