import React from 'react';
import Week from './Week.jsx';
import convertToMonth from '../scripts/monthConverter.js';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: null,
      end: null,
      weeks: [], 
      month: null,
      year: null
    }
  }

  initialStart(callback) {
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

  findFirstOfMonth(weeks) {
    for (let i = 0; i < 7; i++) {
      if (weeks[0][i] === null) {
        return i;
      }
    }
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
    } else if (end) {
      this.buildFromEnd(days, end);
    } else {
      console.log('Something went wrong...');
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
    const end = this.findEndOfMonth(weeks);
    this.setState({ weeks, end });
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
    const start = this.findFirstOfMonth(weeks);
    this.setState({ weeks, start });
  }

  render() {
    return (
      <div className="calendar">
        <div>
          <div>B</div>
          <div>Month</div>
          <div>F</div>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <th>Su</th>
                <th>Mo</th>
                <th>Tu</th>
                <th>We</th>
                <th>Th</th>
                <th>Fr</th>
                <th>Sa</th>
              </tr>
              {this.state.weeks.length
                ? this.state.weeks.map((week, ind) => <Week key={ind} week={week}/>)
                : null}
            </tbody>
          </table>
          <button onClick={() => console.log(this.state)}>Test</button>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.initialStart((start) => this.buildWeeks(null, start));
    this.setYearAndMonth();
  }

};

export default Calendar;