import React from 'react';
import Day from './Day.jsx';

const Week = ({ week }) => (
  <tr>
    {week.map(day => <Day day={day}/>)}
  </tr>
);

export default Week;