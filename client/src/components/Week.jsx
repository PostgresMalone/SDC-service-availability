import React from 'react';
import Day from './Day.jsx';

const Week = ({ week }) => (
  <tr>
    {week.map((day, ind) => <Day key={ind} day={day}/>)}
  </tr>
);

export default Week;