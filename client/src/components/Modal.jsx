import React from 'react';
import style from '../scripts/style.css.js';
import CheckIn from './CheckIn.jsx';
import CheckOut from './CheckOut.jsx';
import Calendar from './Calendar.jsx';
import Guests from './Guests.jsx';
import Star from './Star.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: false,
      selected: [],
      in: null,
      out: null
    };
  }

  showCalendar() {
    this.setState({calendar: true});
  }

  selectDates(event) {
    if (!this.state.in) {
      const date = event.target.id;
      this.setState({in: date});
    }
  }

  render () {
    const displayModal = this.props.show ? style.showModal : style.hideModal;
    return (
      <div style={displayModal}>
        <section style={style.modalMain}>
          <button onClick={this.props.hide}>X</button>
          <section>
            <div>
              <div>
                <div>
                  <div>
                    <span>${this.props.price}</span>
                    <span> / night</span>
                  </div>
                  <div>
                    <span><Star stars={this.props.stars}/></span>
                    <span>{this.props.reviews}</span>
                  </div>
                </div>
                <div>
                  <div>-----------------</div>
                </div>
              </div>
              <label>
                <span>Dates</span>
              </label>
            </div>
            <div>
              <CheckIn checkin={this.state.in} click={() => this.showCalendar()}/>
              <div><i className="fas fa-long-arrow-alt-right"></i></div>
              <CheckOut click={() => this.showCalendar()}/>
              {this.state.calendar 
                ? <Calendar 
                  dates={this.props.dates}
                  select={(e) => this.selectDates(e)}
                  checkin={this.state.in}
                  /> 
                : null}
            </div>
            <button onClick={() => console.log(this.state)}>Modal</button>
            <Guests />
          </section>
        </section>
      </div>
    );
  }

}

export default Modal;