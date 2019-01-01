import React from 'react';
import style from '../scripts/style.css.js';
import CheckIn from './CheckIn.jsx';
import CheckOut from './CheckOut.jsx';
import Calendar from './Calendar.jsx';
import Guests from './Guests.jsx';
import Star from './Star.jsx';
import getMonthDayYear from '../scripts/getMonthDayYear.js';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: false,
      in: null,
      out: null,
      limit: null
    };
  }

  showCalendar() {
    this.setState({calendar: true});
  }

  selectDates(event) {
    const date = event.target.id;
    if (!this.state.in) {
      this.setState({in: date});
      this.makeUnavailableAfterLimit(date);
    }
    if (this.state.in) {
      this.setState({ out: date, limit: null });
    }
    if (this.state.in && this.state.out) {
      this.setState({in: date, out: null});
      this.makeUnavailableAfterLimit(date);
    }
  }

  makeUnavailableAfterLimit(checkin) {
    const arr = getMonthDayYear(checkin); // checkin is in mm/dd/yyyy format
    let month = arr[0];
    let day = arr[1];
    let year = arr[2];
    let truth = true;
    let vacancies = this.props.dates[year][month];
    let len = Object.keys(vacancies).length;
    while (truth) {
      day++;
      if (day > len) {
        month++;
        if (month > 11) {
          year++;
          month = 0;
        }
        vacancies = this.props.dates[year][month];
        day = 1;
      }
      if (!vacancies[day].vacancy) {
        truth = false;
        this.setState({limit: `${month + 1}/${day}/${year}`});
      }
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
              <CheckOut checkout={this.state.out} click={() => this.showCalendar()}/>
              {this.state.calendar 
                ? <Calendar 
                  dates={this.props.dates}
                  select={(e) => this.selectDates(e)}
                  checkin={this.state.in}
                  checkout={this.state.out}
                  limit={this.state.limit}
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