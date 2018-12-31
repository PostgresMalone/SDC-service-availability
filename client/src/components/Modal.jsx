import React from 'react';
import style from '../scripts/style.css.js';
import CheckIn from './CheckIn.jsx';
import CheckOut from './CheckOut.jsx';
import Calendar from './Calendar.jsx';
import Guests from './Guests.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: false
    };
  }

  render () {
    const displayModal = this.props.show ? style.showModal : style.hideModal;
    return (
      <div style={displayModal}>
        <section style={style.modalMain}>
          <button onClick={this.props.hide}>x</button>
          <div>
            <div>
              <label>
                <span>Dates</span>
              </label>
            </div>
            <div>
              <CheckIn click={() => this.showCalendar()}/>
              <div>-></div>
              <CheckOut click={() => this.showCalendar()}/>
              {this.state.calendar 
                ? <Calendar dates={this.props.dates}/> 
                : null}
            </div>
            <Guests />
          </div>
        </section>
      </div>
    );
  }

  showCalendar() {
    this.setState({calendar: true});
  }

}

export default Modal;