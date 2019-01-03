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
  fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
  position: 'fixed',
  overflow: 'hidden',
  margin: '0',
  bottom: '0',
  width: '101%',
  boxShadow: '0 1px 4px 1px rgba(0, 0, 0, 0.14)',
  backgroundColor: '#fff !important'
};

const body = {
  margin: '0px',
};

const innerNavbar = {
  margin: '0 auto -16px auto',
  width: 'auto',
  padding: '15px 24px 29px 24px',
  maxWidth: '100%',
};

const innerNavbar2 = {
  margin: '0',
};

const tableNavbar = {
  display: 'table',
  width: '100%',
};

const cellOtherNavbar = {
  verticalAlign: 'middle',
  display: 'table-cell',
};

const cellSummaryNavbar = {
  verticalAlign: 'middle',
  display: 'table-cell',
  width: '100%',
};

const summary = {
  marginBottom: '-4px',
};

const locationContainer = {
  textTransform: 'uppercase',
};

const locationType = {
  margin: '0',
  wordWrap: 'break-word',
  fontSize: '12px',
  fontWeight: '720',
  lineHeight: '1.3333333333333333em',
  letterSpacing: '0.08333333333333333em',
  color: '#767676',
};

const starContainer = {
  border: '0',
  margin: '0',
  padding: '0',
  textAlign: 'left',
  userSelect: 'auto',
  verticalAlign: 'bottom',
};

const stars = {
  color: '#A61D55',
  fontSize: '9px',
  verticalAlign: 'middle',
  display: 'inline-block',
  marginRight: '2px',
};

const starReviewSpan = {
  lineHeight: '21px',
};

const reviewNum = {
  margin: '0',
  wordWrap: 'break-word',
  fontSize: '12px',
  fontWeight: '720',
  lineHeight: '1.333333333333333em',
  color: '#484848',
};

const verticalLine = {
  borderLeft: '1px solid rgba(72,72,72,0.12)',
  height: '40px',
  width: '1px',
};

const priceContainer = {
  whiteSpace: 'nowrap',
  wordWrap: 'break-word',
  marginTop: '-1px',
  padding: '10px 32px 10px 32px'
};

const priceContainerInner = {
  lineHeight: '10px',
};

const priceDisplay = {
  display: 'inline-block',
};

const priceNum = {
  margin: '0 2px 0 0',
  wordWrap: 'break-word',
  fontSize: '22px',
  fontWeight: '720',
  lineHeight: '1.2857142857142858em',
  color: '#484848',
};

const night = {
  overflowWrap: 'break-word',
  fontSize: '12px',
  fontWeight: '720',
  lineHeight: '1.33333em',
  color: 'rgb(118, 118, 118)',
  margin: '0',
  textTransform: 'uppercase',
};

const bookContainer = {
  margin: '0 8px 0 8px',
  width: '174px',
};

const bookButton = {
  borderRadius: '4px',
  fontSize: '12px',
  lineHeight: '1.3333333333333333em',
  letterSpacing: '0.08333333333333333em',
  textTransform: 'uppercase',
  padding: '12px 64px 12px 64px',
  fontWeight: '700',
  border: '2px solid #A61D55',
  boxShadow: 'none',
  background: '#A61D55',
  color: '#fff',
  margin: '0',

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
  innerNavbar,
  innerNavbar2,
  tableNavbar,
  cellSummaryNavbar,
  cellOtherNavbar,
  summary,
  locationContainer,
  locationType,
  starContainer,
  starReviewSpan,
  stars,
  reviewNum,
  verticalLine,
  priceContainer,
  priceContainerInner,
  priceDisplay,
  priceNum,
  night, 
  bookContainer,
  bookButton
};