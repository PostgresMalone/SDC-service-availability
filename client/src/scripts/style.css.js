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

module.exports = {
  showModal,
  hideModal,
  modalMain
};