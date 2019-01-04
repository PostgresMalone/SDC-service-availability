import React from 'react';
import Counter from './Counter.jsx';
import style from '../scripts/style.css.js';

const Count = ({ close, total, adults, children, infants, addAdult, minusAdult, addChildren, minusChildren, addInfant, minusInfant }) => {
  return (
    <div>
      <div className="count-container" style={style.countContainer}>
        <div style={{marginTop: '16px', marginBottom: '16px'}}>
          <div style={{marginTop: '16px', marginBottom: '16px'}}>
            <div style={style.counterContainer}>
              <div style={style.counterName}>
                Adults
              </div>
              <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                <Counter who={adults} add={addAdult} minus={minusAdult} minimum={1} total={total}/>
              </div>
            </div>
          </div>
          <div style={{marginTop: '24px', marginBottom: '24px'}}>
            <div style={style.counterContainer}>
              <div style={style.counterName}>
                <div>
                  Children
                </div>
                <div style={style.counterSubtext}>
                  Ages 2-12
                </div>
              </div>
              <div>
            </div>
              <Counter who={children} add={addChildren} minus={minusChildren} minimum={0} total={total}/>
            </div>
          </div>
          <div style={{marginTop: '24px', marginBottom: '24px'}}>
            <div style={style.counterContainer}>
              <div style={style.counterName}>
                <div>
                  Infants
                </div>
                <div style={style.counterSubtext}>
                  Ages 2-12
                </div>
              </div>
              <div>
            </div>
              <Counter who={infants} add={addInfant} minus={minusInfant} minimum={0} maximum={5}/>
            </div>
          </div>
          <div>
            <div style={{marginBottom: '16px'}}>
              <div style={style.counterSubtext}>
                3 guests maximum. Infants don’t count toward the number of guests.
              </div>
            </div>
            <div style={style.guestClose}>
              <div style={{display: 'inline-block', verticalAlign: 'middle', textAlign: 'left', flexGrow: '1'}}></div>
                <div style={{margin: '0', padding: '0'}}>
                  <button onClick={close} style={style.guestButtonClose}>Close</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;