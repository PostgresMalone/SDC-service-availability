const showModal = {
  position: 'fixed',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  overflowY: 'auto',
  background: 'rgba(255, 255, 255, 0.8)',
  fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
};

const hideModal = {
  display: 'none'
};

const modalMain = {
  display: 'block',
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  padding: '24px',
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

const logo = {
  fontSize: '32px',
   paddingRight: '28px',
   marginTop: '4px',
   color: '#A61D55',
   marginLeft: '8px',
   display: 'inline-block',
}

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

const modalContainer = {
  display: 'table',
  height: '100%',
  width: '100%',
};

const modalPadder = {
  display: 'table-cell',
  verticalAlign: 'middle',
  padding: '64px',
};

const modalCenter = {
  backgroundColor: '#fff',
  width: '100%',
  position: 'relative',
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 10px 0px ',
  maxWidth: '376px',
  margin: 'auto'
};

const buttonClose = {
  marginBottom: '12px',
};

const buttonCloseX = {
  padding: '0',
  margin: '0',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  color: 'rgb(118, 118, 118)',
  display: 'block',
  borderWidth: '0',
  fontSize: '26px',
  fontWeight: '0',
};

const infoPrice = {
  margin: '0',
  padding: '0',
  textAlign: 'left',
  verticalAlign: 'bottom',
};

const infoPriceContainer = {
  lineHeight: '10px',
  display: 'inline-block',
  overflowWrap: 'break-word',
};

const infoPriceText = {
  fontSize: '22px',
  fontWeight: '720',
  lineHeight: '1.4444444em',
  color: 'rgb(72,72,72)',
  margin: '0',
};

const infoPriceNight = {
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '1.33333em',
  color: 'rgb(118,118,118)',
  margin: '0',
  textTransform: 'uppercase',
};

const infoStar = {
  verticalAlign: 'middle',
  lineHeight: '21px',
  color: '#A61D55',
  fontSize: '9px',
  display: 'inline-block',
  marginRight: '2px',
};

const infoReviewNum = {
  margin: '0 0 0 2px',
  wordWrap: 'break-word',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '1.3333333333333333em',
  color: '#484848',
};

const chargedText = {
  margin: '0',
  wordWrap: 'break-word',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '1.333333333333333333em',
  color: '#484848',
};

const buttonBook ={
  fontSize: '12px',
  lineHeight: '1.3333333333333333em',
  letterSpacing: '0.08333333333333333em ',
  color: '#fff',
  textTransform: 'uppercase',
  width: '100%',
  padding: '10px 22px 10px 22px',
  fontWeight: '720px',
  boxShadow: 'none',
  wordWrap: 'break-word',
  backgroundColor: '#A61D55',
  border: '2px solid #A61D55',
  borderRadius: '4px',
};

const bookText = {
  padding: '3px 0 3px 0',
  marginTop: '-2px',
};

module.exports = {
  bookText,
  buttonBook,
  chargedText,
  infoReviewNum,
  infoStar,
  infoPriceNight,
  infoPriceText,
  infoPriceContainer,
  infoPrice,
  buttonCloseX,
  buttonClose,
  modalCenter,
  modalPadder,
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
  bookButton,
  logo,
  modalContainer,
};