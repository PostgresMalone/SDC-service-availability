import React from 'react';
import style from '../scripts/style.css.js';

const Day = ({ day, vacancy, select, year, month }) => {
  if (vacancy !== undefined) {
    const text = vacancy ? style.available : style.unavailable;
    return (
      vacancy
      ? <td style={text} id={`${year}/${month}/${day}`} onClick={(e) => select(e)}>{day}</td>
      : <td style={text} value={day}>{day}</td>
    )
  } else {
    return (
      <td> </td>
    )
  }
};

export default Day;