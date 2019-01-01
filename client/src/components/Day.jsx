import React from 'react';
import style from '../scripts/style.css.js';
import getMonthDayYear from '../scripts/getMonthDayYear.js';

const Day = ({ day, vacancy, select, year, month, checkin }) => {
  if (vacancy !== undefined) {
    let text = vacancy ? style.available : style.unavailable;
    const today = new Date;
    const nowMonth = today.getMonth();
    const nowDay = today.getDate();
    const nowYear = today.getFullYear();
    const dayMonth = Number(month);
    const dayDay = Number(day);
    const dayYear = Number(year);
    if (dayYear < nowYear || (dayMonth === nowMonth && dayYear === nowYear && dayDay < nowDay) || (dayYear === nowYear && dayMonth < nowMonth)) {
      text = style.unavailable;
    }
    if (checkin) {
      const check = getMonthDayYear(checkin);
      const inMonth = Number(check[0]);
      const inDay = Number(check[1]);
      const inYear = Number(check[2]);
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