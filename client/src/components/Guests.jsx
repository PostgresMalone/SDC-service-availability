import React from 'react';
import Count from './Count.jsx';
import focusText from '../scripts/focusText.js';

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

  showGuests() {
    this.setState({showGuests: true});
  }

  render() {
    const guests = this.state.total > 1 ? 'guests' : 'guest';
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
            ? <Count />
            : <div></div>}
        </div>
      </div>
    )
  }
}

export default Guests;