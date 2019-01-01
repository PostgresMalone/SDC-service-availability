import React from 'react';
import style from '../scripts/style.css.js';

const Day = ({ day, vacancy }) => {
  if (vacancy !== undefined) {
    const text = vacancy ? style.available : style.unavailable;
    return (
      <td style={text}>{day}</td>
    )
  } else {
    return (
      <td> </td>
    )
  }
};

export default Day;