import React from 'react';
import Day from './Day.jsx';

const Week = ({ week, vacancy, select, year, month, checkin, checkout, limit }) => (
  <tr>
    {week.map((day, ind) => {
      if (day) {
        return (
          <Day 
            key={ind} 
            day={day} 
            vacancy={vacancy[day].vacancy} 
            select={select} 
            year={year}
            month={month}
            checkin={checkin}
            checkout={checkout}
            limit={limit}
          />
        );
      } else {
        return <Day key={ind} day={day} />;
      } 
    }) }
  </tr>
);

export default Week;