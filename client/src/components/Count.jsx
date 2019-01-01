import React from 'react';
import Counter from './Counter.jsx';

const Count = ({ close, total, adults, children, infants, addAdult, minusAdult, addChildren, minusChildren }) => {
  return (
    <div>
      <div>
        <div>
          Adults
        </div>
        <div>
          <Counter who={adults} add={addAdult} minus={minusAdult} minimum={1} total={total}/>
        </div>
      </div>
      <div>
        <div>
          Children
        </div>
        <div>
          <Counter who={children} add={addChildren} minus={minusChildren} minimum={0} total={total}/>
        </div>
      </div>
      <div>
        <div>
          Infants
        </div>
        <div>
          {/* <Counter who={infants} add={addAdult} minus={minusAdult} minimum={0}/> */}
        </div>
      </div>
      <div>
        <div>
          3 guests maximum. Infants don’t count toward the number of guests.
        </div>
        <div>
          <button onClick={close}>Close</button>
        </div>
      </div>
    </div>
  )
};

export default Count;