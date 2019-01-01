import React from 'react';
import style from '../scripts/style.css.js';

const Day = ({ day, vacancy, select, year, month }) => {
  if (vacancy !== undefined) {
    const text = vacancy ? style.available : style.unavailable;
    return (
      vacancy
      ? <td style={text} id={`${month + 1}/${day}/${year}`} onClick={(e) => select(e)}>{day}</td>
      : <td style={text}>{day}</td>
    )
  } else {
    return (
      <td> </td>
    )
  }
};

export default Day;