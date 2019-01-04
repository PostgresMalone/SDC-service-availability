import React from 'react';
import Count from './Count.jsx';
import focusText from '../scripts/focusText.js';
import style from '../scripts/style.css.js';

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGuests: false,
      adults: 1,
      children: 0,
      infants: 0, 
      total: 1
    };
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
    const numInfants = infants ? ', ' + infants : '';
    const wordInfants = infants <= 0 ? '' : infants === 1 ? 'infant' : 'infants';
    return (
      <div style={{marginBottom: '16px'}}>
        <div style={style.guestText}>Guests</div>
        <div style={{position: 'relative'}}>
          <div style={{position: 'relative', width: '100%'}}>
            <button type="text" className="show-count" style={style.guestButton} onClick={() => this.setState({showGuests: !this.state.showGuests})}>
              <div style={{margin: '0 8px 0 8px'}}>
                <div style={style.guestButtonContainer}>
                  <div style={style.guestNum}>
                    <span style={{fontSize: '17px', margin: '0', padding: '0'}}>{this.state.total} {guests}{numInfants} {wordInfants}</span>
                  </div>
                  <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                    <span style={{display: 'block', fontSize: '17px', color: '#484848'}}>
                      {this.state.showGuests
                        ? <i className="fas fa-chevron-up"></i>
                        : <i className="fas fa-chevron-down"></i>}
                    </span>
                  </div>
                </div>
              </div>
            </button>
            {this.state.showGuests
              ? <Count 
                total={total} 
                adults={adults} 
                children={children} 
                infants={infants} 
                close={() => this.hideGuests()} 
                addAdult={() => this.addAdult()} 
                minusAdult={() => this.minusAdult()}
                addChildren={() => this.addChildren()} 
                minusChildren={() => this.minusChildren()}
                addInfant={() => this.addInfant()} 
                minusInfant={() => this.minusInfant()}
              />
              : <div></div>}
          </div>
        </div>
      </div>
    );
  }
}

export default Guests;