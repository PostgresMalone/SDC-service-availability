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
      start: null,
      end: null,
      weeks: [], 
      month: null,
      year: null
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
                ? <Calendar weeks={this.state.weeks}/> 
                : null}
            </div>
          </div>
          <button onClick={() => console.log(this.state)}>Test</button>
        </section>
      </div>
    );
  }

  showCalendar() {
    this.setState({calendar: true});
  }

  findFirstOfMonth(callback) {
    const today = new Date;
    let day = today.getDay();
    let date = today.getDate();
    while ((date - 1) % 7 !== 0 || date !== 1) {
      date--;
      day--;
      day < 0 ? day = 6 : day;
    }
    this.setState({ start: day });
    callback ? callback(day) : null;
  }

  findEndOfMonth(weeks) {
    const len = weeks.length - 1;
    for (let i = 0; i < 7; i++) {
      if (weeks[len][i] === null) {
        return i - 1;
      }
    }
  }

  setYearAndMonth() {
    const today = new Date;
    const year = today.getFullYear();
    const month = today.getMonth();
    this.setState({year, month});
  }

  buildWeeks(days, start, end, year, month) {
    const now = new Date; 
    year = year ? year : now.getFullYear();
    month = month ? month : now.getMonth();
    days = days ? days : Object.keys(this.props.dates[year][month]);
    if (start) {
      this.buildFromStart(days, start);
    } 
  }

  buildFromStart(days, start) {
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
    const newEnd = this.findEndOfMonth(weeks);
    this.setState({ weeks, end: newEnd });
  }

  buildFromEnd(days, end) {
    let weeks = [];
    let week = [];
    let count = days.length + 6 - end;
    while (count > 0) {
      if (count > days.length) {
        week.unshift(null);
      } else {
        week.unshift(days[count - 1]);
      }
      if (week.length === 7) {
        weeks.unshift(week);
        week = [];
      }
      if (count === 1 && week.length && week.length < 7) {
        while (week.length < 7) {
          week.unshift(null);
        }
        weeks.unshift(week);
      }
      count--;
    }
    this.setState({ weeks });
  }

  componentDidMount() {
    this.findFirstOfMonth((start) => this.buildWeeks(null, start));
    this.setYearAndMonth();
  }

}

export default Modal;