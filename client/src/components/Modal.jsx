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
      dates: this.props.dates,
      adults: 2,
      children: 0,
      infants: 0,
    };
  }

  showCalendar() {
    this.setState({calendar: true});
  }

  toggleCalender() {
    this.setState({calendar: !this.state.calendar})
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
    // debugger;
    if (start && end) {
      let startDate = getMonthDayYear(start);
      let startMonth = startDate[0] + 1;
      let startDay = startDate[1];
      let startYear = startDate[2];
      startDate = [startYear, startMonth, startDay].join('-');

      let endDate = getMonthDayYear(end);
      let endMonth = endDate[0] + 1;
      let endDay = endDate[1];
      let endYear = endDate[2];
      endDate = [endYear, endMonth, endDay].join('-');
      // const dates = this.createBookedArray(start, end);
      // const avaiability = this.updateAvailabilities(dates, this.state.dates);
      let reservation = {
        checkIn: startDate,
        checkOut: endDate,
        adults: this.state.adults,
        children: this.state.children,
        infants: this.state.infants,
      };

      axios({
        method: 'post',
        url: `/api/availabilities/${this.props.id}/reservations`,
        data: reservation
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
      date = [year, month, day].join('-');
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
      <div className="modal" style={displayModal}>
        <div className="modal-container" style={style.modalContainer}>
          <div className="modal-padder" style={style.modalPadder}>
            <div className="modal-center" style={style.modalCenter}>
              <section style={style.modalMain}>
                <div className="button-close" style={style.buttonClose}>
                  <button onClick={this.props.hide} style={style.buttonCloseX}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <section className="info" style={{display: 'block'}}>
                  <div style={{boxSizing: 'border-box'}}>
                    <div>
                      <div className="info-price" style={style.infoPrice}>
                        <div className="info-price-container" style={style.infoPriceContainer}>
                          <span className="info-price-text" style={style.infoPriceText}>${this.props.price}</span>
                          <span className="info-price-night" style={style.infoPriceNight}> / night</span>
                        </div>
                        <div style={{boxSizing: 'border-box'}}>
                          <span className="info-star" style={style.infoStar}><Star stars={this.props.stars}/></span>
                          <span className="info-review-num" style={style.infoReviewNum}>{this.props.reviews}</span>
                        </div>
                        <div style={{margin: '16px 0 16px 0', borderTop: '1px solid', borderColor: '#EBEBEB'}}></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div style={{margin: '16px 0 8px 0'}}>
                      <label style={style.dateLabel}>
                        <span>Dates</span>
                      </label>
                      <div style={{position: 'relative', display: 'block'}}>
                        <div className="checkinout-box" style={{border: '1px solid rgb(235, 235, 235)', borderRadius: '2px'}}>
                          <CheckIn checkin={this.state.in} click={() => this.toggleCalender()}/>
                          <div style={{display: 'inline-block', verticalAlign: 'middle', position: 'relative'}}>
                            <i className="fas fa-long-arrow-alt-right" style={{display: 'block', fontSize: '18px', color: 'rgb(117, 117, 117)', marginRight: '4px'}}></i>
                          </div>
                          <CheckOut checkout={this.state.out} click={() => this.toggleCalender()}/>
                        </div>
                      </div>
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
                    <div className="final-book" style={{marginTop: '24px', textAlign: 'center'}}>
                      <button className="button-book" style={style.buttonBook} onClick={() => this.bookDates(this.state.in, this.state.out)}>
                        <div style={style.bookText}>Book</div>
                      </button>
                    </div>
                    <div style={{marginTop: '8px'}}>
                      <div style={{textAlign: 'center'}}>
                        <span className="charged-text" style={style.chargedText}>You won't be charged yet</span>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Modal;