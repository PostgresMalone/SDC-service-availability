import React from 'react';
import style from '../scripts/style.css.js';
import CheckIn from './CheckIn.jsx';
import CheckOut from './CheckOut.jsx';
import Calendar from './Calendar.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: false,
      start: 0,
      end: 0
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
                ? <Calendar /> 
                : null}
            </div>
          </div>
        </section>
      </div>
    );
  };

  showCalendar() {
    this.setState({calendar: true});
  }

  findFirstOfMonth() {
    const today = new Date;
    let day = today.getDay();
    let date = today.getDate();
    while ((date - 1) % 7 !== 0 || date !== 1) {
      date--;
      day--;
      day < 0 ? day = 6 : day;
    }
  }

  buildWeeks(dates, start) {
    if (start < 0 || start > 6) {
      return console.log('start date out of bounds');
    }
    const now = new Date; 
    const year = now.getFullYear();
    const month = now.getMonth();
    const days = Object.keys(this.props.dates[year][month]);
    let weeks = [];
    let week = [];
    let count = 0;
    while (count < days.length + start) {
      if (count < start) {
        week.push(null);
      } else {
        week.push(days[count - start]);
      }
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
      if (count === days.length + start - 1 && week.length < 7 && week.length) {
        while (week.length < 7) {
          week.push(null);
        }
        weeks.push(week);
      }
      count++;
    }
  }

}

export default Modal;