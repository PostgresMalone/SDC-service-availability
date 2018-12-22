import React from 'react';
import style from '../scripts/style.css.js';

const Modal = ({show, hide}) => {
  const displayModal = show ? style.showModal : style.hideModal;
  return (
    <div style={displayModal}>
      <section style={style.modalMain}>
        <button onClick={hide}>x</button>
      </section>
    </div>
  );
};

export default Modal;