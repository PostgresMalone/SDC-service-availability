import React from 'react';
import Day from './Day.jsx';

const Week = ({ week, vacancy }) => (
  <tr>
    {week.map((day, ind) => {
      if (day) {
        return <Day key={ind} day={day} vacancy={vacancy[day].vacancy} />
      } else {
        return <Day key={ind} day={day} />
      }})}
  </tr>
);

export default Week;