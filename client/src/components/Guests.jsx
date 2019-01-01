import React from 'react';
import Count from './Count.jsx';
import focusText from '../scripts/focusText.js';

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGuests: false,
      adults: 1,
      children: 0,
      infants: 0, 
      total: 1
    }
  }

  showGuests() {
    this.setState({showGuests: true});
  }

  hideGuests() {
    this.setState({showGuests: false});
  }

  addAdult() {
    const adults = this.state.adults + 1;
    const total = this.state.total + 1;
    this.setState({ adults, total });
    return total >= 3 ? true : false;
  }

  minusAdult() {
    const adults = this.state.adults - 1;
    const total = this.state.total - 1;
    this.setState({ adults, total });
    return adults;
  }

  addChildren() {
    const children = this.state.children + 1;
    const total = this.state.total + 1;
    this.setState({ children, total });
    return total >= 3 ? true : false;
  }

  minusChildren() {
    const children = this.state.children - 1;
    const total = this.state.total - 1;
    this.setState({ children, total });
    return children;
  }

  addInfant() {
    const infants = this.state.infants + 1;
    this.setState({ infants });
    return infants >= 5 ? true : false;
  }

  minusInfant() {
    const infants = this.state.infants - 1;
    this.setState({ infants });
    return infants;
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
            ? <Count total={total} adults={adults} children={children} infants={infants} 
                close={() => this.hideGuests()} addAdult={() => this.addAdult()} minusAdult={() => this.minusAdult()}
                addChildren={() => this.addChildren()} minusChildren={() => this.minusChildren()}
                addInfant={() => this.addInfant()} minusInfant={() => this.minusInfant()}/>
            : <div></div>}
        </div>
        <button onClick={() => console.log(this.state)}>Test</button>
      </div>
    )
  }
}

export default Guests;