import React from 'react';
import Week from './Week.jsx';
import convertToMonth from '../scripts/monthConverter.js';
import style from '../scripts/style.css.js';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: null,
      end: null,
      weeks: [], 
      month: null,
      year: null,
      vacancies: {}
    };
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
      if (weeks[0][i] !== null) {
        return i;
      }
    }
    return 6;
  }

  findEndOfMonth(weeks) {
    const len = weeks.length - 1;
    for (let i = 0; i < 7; i++) {
      if (weeks[len][i] === null) {
        return i - 1;
      }
    }
    return 6;
  }

  getVacancies(year, month) {
    this.setState({ vacancies: this.props.dates[year][month] });
  }

  setYearAndMonth(callback) {
    const today = new Date;
    const year = today.getFullYear();
    const month = today.getMonth();
    this.setState({year, month});
    callback(year, month);
  }

  buildWeeks(start, end, year, month) {
    const now = new Date; 
    year = year ? year : now.getFullYear();
    month = month ? month : now.getMonth();
    const days = Object.keys(this.props.dates[year][month]);
    if (start !== null) {
      this.buildFromStart(days, start);
    } else if (end !== null) {
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
    this.setState({ weeks, end, start });
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
    this.setState({ weeks, start, end });
  }

  plusMonth() {
    let month = this.state.month;
    let year = this.state.year;
    month++;
    if (month > 11) {
      month = 0;
      year++;
      this.setState({ month, year });
    } else {
      this.setState({ month });
    }
    let end = this.state.end;
    end++;
    end = end > 6 ? 0 : end;
    this.buildWeeks(end, null, year, month);
    this.getVacancies(year, month);
  }

  minusMonth() {
    let month = this.state.month;
    let year = this.state.year;
    month--;
    if (month < 0) {
      month = 11;
      year--;
      this.setState({ month, year });
    } else {
      this.setState({ month });
    }
    let start = this.state.start;
    start--;
    start = start < 0 ? 6 : start;
    this.buildWeeks(null, start, year, month);
    this.getVacancies(year, month);
  }

  componentDidMount() {
    this.initialStart((start) => this.buildWeeks(start));
    this.setYearAndMonth((year, month) => this.getVacancies(year, month));
  }

  render() {
    const month = convertToMonth(this.state.month);
    const year = this.state.year;
    return (
      <div className="calendar-modal" style={style.calendarModal}>
        <div className="calendar-body" style={style.calendarBody}>
          <div style={{height: '308px', padding: '0 26px', textAlign: 'center', verticalAlign: 'top'}}>
            <div style={style.calendarHeader}>
              <div className="previous-month-button" style={style.cellOtherNavbar}onClick={() => this.minusMonth()}>
                <div style={{textAlign: 'left', border: '1px solid rgb(235, 235, 235)', padding: '2px 9px'}}>
                    <i className="fas fa-arrow-left"></i>
                </div>
              </div>
              <div className="month-header" style={{fontWeight: '600', textAlign: 'center', margin: '0 55px'}}>{month} {year}</div>
              <div className="next-month-button" style={style.cellOtherNavbar}onClick={() => this.plusMonth()}>
                <div style={{textAlign: 'right', border: '1px solid rgb(235, 235, 235)', padding: '2px 9px'}}>
                    <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div>
              <table style={{borderCollapse: 'collapse', borderSpacing: '0px', width: '100%'}}>
                <tbody>
                  <tr>
                    <th style={{fontWeight: '400', fontSize: '0.85em', margin: '1px 0', }}>Su</th>
                    <th style={{fontWeight: '400', fontSize: '0.85em', margin: '1px 0', }}>Mo</th>
                    <th style={{fontWeight: '400', fontSize: '0.85em', margin: '1px 0', }}>Tu</th>
                    <th style={{fontWeight: '400', fontSize: '0.85em', margin: '1px 0', }}>We</th>
                    <th style={{fontWeight: '400', fontSize: '0.85em', margin: '1px 0', }}>Th</th>
                    <th style={{fontWeight: '400', fontSize: '0.85em', margin: '1px 0', }}>Fr</th>
                    <th style={{fontWeight: '400', fontSize: '0.85em', margin: '1px 0', }}>Sa</th>
                  </tr>
                  {this.state.weeks.length
                    ? this.state.weeks.map((week, ind) => 
                      <Week 
                        key={ind} 
                        week={week}
                        year={this.state.year}
                        month={this.state.month}
                        vacancy={this.state.vacancies}
                        select={this.props.select}
                        checkin={this.props.checkin}
                        checkout={this.props.checkout}
                        limit={this.props.limit}
                      />)
                    : null}
                </tbody>
              </table>
            </div>
          </div>
          <div className="update-and-clear">
            <div>
              <span>
                <div>Updated 1 month ago</div>
              </span>
              <div>
                <button className="clear-dates" onClick={this.props.clear}>Clear dates</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Calendar;