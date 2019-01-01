import React from 'react';
import style from '../scripts/style.css.js';
import CheckIn from './CheckIn.jsx';
import CheckOut from './CheckOut.jsx';
import Calendar from './Calendar.jsx';
import Guests from './Guests.jsx';
import Star from './Star.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: false
    };
  }

  render () {
    const displayModal = this.props.show ? style.showModal : style.hideModal;
    return (
      <div style={displayModal}>
        <section style={style.modalMain}>
          <button onClick={this.props.hide}>X</button>
          <section>
            <div>
              <div>
                <div>
                  <div>
                    <span>${this.props.price}</span>
                    <span> / night</span>
                  </div>
                  <div>
                    <span><Star stars={this.props.stars}/></span>
                    <span>{this.props.reviews}</span>
                  </div>
                </div>
                <div>
                  <div>-----------------</div>
                </div>
              </div>
              <label>
                <span>Dates</span>
              </label>
            </div>
            <div>
              <CheckIn click={() => this.showCalendar()}/>
              <div>-></div>
              <CheckOut click={() => this.showCalendar()}/>
              {this.state.calendar 
                ? <Calendar dates={this.props.dates}/> 
                : null}
            </div>
            <Guests />
          </section>
        </section>
      </div>
    );
  }

  showCalendar() {
    this.setState({calendar: true});
  }

}

export default Modal;