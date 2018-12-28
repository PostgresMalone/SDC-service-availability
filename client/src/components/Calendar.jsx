import React from 'react';
import Week from './Week.jsx';

const Calendar = ({ weeks }) => {
  return (
    <div>
      <div>
        <div>B</div>
        <div>Month</div>
        <div>F</div>
      </div>
      <div>
      <table>
          <tbody>
            <tr>
              <th>Su</th>
              <th>Mo</th>
              <th>Tu</th>
              <th>We</th>
              <th>Th</th>
              <th>Fr</th>
              <th>Sa</th>
            </tr>
            {weeks.map(week => <Week week={week}/>)}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default Calendar;