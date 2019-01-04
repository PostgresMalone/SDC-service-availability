import React from 'react';
import style from '../scripts/style.css.js';
import getMonthDayYear from '../scripts/getMonthDayYear.js';

const Day = ({ day, vacancy, select, year, month, checkin, checkout, limit }) => {
  if (vacancy !== undefined) {
    let text = vacancy ? style.available : style.unavailable;
    const today = new Date;
    const nowMonth = today.getMonth();
    const nowDay = today.getDate();
    const nowYear = today.getFullYear();
    const dayMonth = Number(month);
    const dayDay = Number(day);
    const dayYear = Number(year);
    if (dayYear < nowYear 
      || (dayMonth === nowMonth && dayYear === nowYear && dayDay < nowDay) 
      || (dayYear === nowYear && dayMonth < nowMonth)
    ) {
      text = style.unavailable;
    }
    if (limit) {
      const checkLimit = getMonthDayYear(limit);
      const limMonth = checkLimit[0];
      const limDay = checkLimit[1];
      const limYear = checkLimit[2];
      if (
        dayYear > limYear 
        || (dayMonth === limMonth && dayYear === limYear && dayDay >= limDay) 
        || (dayYear === limYear && dayMonth > limMonth)
      ) {
        text = style.unavailable;
      }
    }
    if (checkin && checkout) {
      const checkOut = getMonthDayYear(checkout);
      const outMonth = checkOut[0];
      const outDay = checkOut[1];
      const outYear = checkOut[2];
      const checkIn = getMonthDayYear(checkin);
      const inMonth = checkIn[0];
      const inDay = checkIn[1];
      const inYear = checkIn[2];
      if (inMonth <= dayMonth && inDay < dayDay && inYear <= dayYear && dayMonth <= outMonth && dayDay < outDay && dayYear <= outYear) {
        text = style.selected;
      } else if ((inMonth === dayMonth && inDay === dayDay && inYear === dayYear) || dayMonth === outMonth && dayDay === outDay && dayYear === outYear) {
        text = style.checkdate;
      }
    } else if (checkin) {
      const checkIn = getMonthDayYear(checkin);
      const inMonth = checkIn[0];
      const inDay = checkIn[1];
      const inYear = checkIn[2];
      if (dayYear < inYear 
        || (dayMonth === inMonth && dayYear === inYear && dayDay < inDay) 
        || (dayYear === inYear && dayMonth < inMonth)
      ) {
        text = style.unavailable;
      }
      if (dayMonth === inMonth && dayDay === inDay && dayYear === inYear) {
        text = style.checkdate;
      }
    }
    return (
      vacancy
        ? <td 
          style={text} 
          id={`${month + 1}/${day}/${year}`} 
          onClick={(e) => select(e)}
          >{day}</td>
        : <td style={text}>{day}</td>
    );
  } else {
    return (
      <td> </td>
    );
  }
};

export default Day;