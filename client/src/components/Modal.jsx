import React from 'react';
import style from '../scripts/style.css.js';
import CheckIn from './CheckIn.jsx';
import CheckOut from './CheckOut.jsx';
import Calendar from './Calendar.jsx';
import Guests from './Guests.jsx';
import Star from './Star.jsx';
import getMonthDayYear from '../scripts/getMonthDayYear.js';
import axios from 'axios';
import monthLengths from '../scripts/monthLengths.js';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: false,
      in: null,
      out: null,
      limit: null,
      dates: this.props.dates
    };
  }

  showCalendar() {
    this.setState({calendar: true});
  }

  clearDates() {
    this.setState({in: null, out: null, limit: null});
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

  bookDates(start, end) {
    if (start && end) {
      const dates = this.createBookedArray(start, end);
      const avaiability = this.updateAvailabilities(dates, this.state.dates);
      axios({
        method: 'put',
        url: `/availabilities/${this.props.id}`,
        data: { avaiability }
      })
        .then(() => {
          window.alert(`You have booked the dates ${start} to ${end}`);
          axios.get(`/availabilities/${this.props.id}`)
            .then(result => {
              const data = result.data[0].availability;
              this.setState({data, in: null, out: null, limit: null});
            });
        })
        .catch(() => console.log('Failed to update in database'));
    } else {
      this.setState({calendar: true});
    }
  }

  createBookedArray(start, end) {
    let date = start;
    let dates = [];
    if (date === end) {
      dates.push(start);
      return dates;
    }
    while (date !== end) {
      dates.push(date);
      date = getMonthDayYear(date);
      let month = date[0];
      let day = date[1];
      let year = date[2];
      day++;
      if (day > monthLengths[month]) {
        day = 1;
        month++;
        if (month > 11) {
          month = 0;
          year++;
        }
      }
      month++;
      date = [month, day, year].join('/');
    }
    dates.push(end);
    return dates;
  }

  updateAvailabilities(dateArray, vacancies) {
    dateArray.map(date => {
      const booking = getMonthDayYear(date);
      const month = booking[0];
      const day = booking[1];
      const year = booking[2];
      vacancies[year][month][day].vacancy = false;
    });

    return vacancies;

  }

  makeUnavailableAfterLimit(checkin) {
    const arr = getMonthDayYear(checkin); // checkin is in mm/dd/yyyy format
    let month = arr[0];
    let day = arr[1];
    let year = arr[2];
    let truth = true;
    let vacancies = this.state.dates[year][month];
    let len = Object.keys(vacancies).length;
    while (truth) {
      day++;
      if (day > len) {
        month++;
        if (month > 11) {
          year++;
          month = 0;
        }
        vacancies = this.state.dates[year][month];
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
          <div>
            <button onClick={this.props.hide}>X</button>
          </div>
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
                  <div>
                    <div>-----------------</div>
                  </div>
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
                  dates={this.state.dates}
                  select={(e) => this.selectDates(e)}
                  checkin={this.state.in}
                  checkout={this.state.out}
                  limit={this.state.limit}
                  clear={() => this.clearDates()}
                /> 
                : null}
            </div>
            <Guests />
            <div className="final-book">
              <button>
                <div className="button-book" onClick={() => this.bookDates(this.state.in, this.state.out)}>Book</div>
              </button>
            </div>
            <div>
              <div>
                <span>You won't be charged yet.</span>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }

}

export default Modal;