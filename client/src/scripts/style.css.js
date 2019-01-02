const showModal = {
  display: 'block',
  position: 'fixed',
  width: '100%', 
  height: '100%', 
  transform: 'translate(-50%, -50%)',
  top: '50%',
  left: '50%',
  background: 'rgba(255, 255, 255, 0.6)'
};

const hideModal = {
  display: 'none'
};

const modalMain = {
  position: 'fixed',
  background: 'white',
  width: '80%',
  height: 'auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)'
};

const unavailable = {
  color: 'red'
};

const available = {
  color: 'blue'
};

const selected = {
  color: 'orange'
};

const checkdate = {
  color: 'green'
};

const navbar = {
  position: 'fixed',
  overflow: 'hidden',
  margin: '0',
  bottom: '0',
  width: '101%',
  border: '1px solid rgba(230, 230, 230, 0.8)',
  boxShadow: '0px -1px 3px rgba(230, 230, 230, 0.8)'
};

const body = {
  margin: '0px'
};

module.exports = {
  showModal,
  hideModal,
  modalMain,
  unavailable,
  available,
  selected,
  checkdate,
  navbar,
  body,
};