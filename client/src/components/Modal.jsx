import React from 'react';
import style from '../scripts/style.css.js';
import CheckIn from './CheckIn.jsx';
import CheckOut from './CheckOut.jsx';

const Modal = ({show, hide}) => {
  const displayModal = show ? style.showModal : style.hideModal;
  return (
    <div style={displayModal}>
      <section style={style.modalMain}>
        <button onClick={hide}>x</button>
        <div>
          <div>
            <label>
              <span>Dates</span>
            </label>
            </div>
          <div>
            <CheckIn />
            <div>-></div>
            <CheckOut />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;