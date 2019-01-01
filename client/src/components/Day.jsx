import React from 'react';
import style from '../scripts/style.css.js';
import getMonthDayYear from '../scripts/getMonthDayYear.js';

const Day = ({ day, vacancy, select, year, month, checkin }) => {
  if (vacancy !== undefined) {
    let text = vacancy ? style.available : style.unavailable;
    if (checkin) {
      const check = getMonthDayYear(checkin);
      const inMonth = Number(check[0]);
      const inDay = Number(check[1]);
      const inYear = Number(check[2]);
      const dayMonth = Number(month);
      const dayDay = Number(day);
      const dayYear = Number(year);
      if (dayYear < inYear || (dayMonth === inMonth && dayYear === inYear && dayDay < inDay) || (dayYear === inYear && dayMonth < inMonth)) {
        text = style.unavailable;
      }
    }
    return (
      vacancy
      ? <td style={text} id={`${month + 1}/${day}/${year}`} onClick={(e) => select(e)}>{day}</td>
      : <td style={text}>{day}</td>
    );
  } else {
    return (
      <td> </td>
    );
  }
};

export default Day;