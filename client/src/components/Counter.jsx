import React from 'react';
import style from '../scripts/style.css.js';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minusDisabled: true,
      addDisabled: false
    };
  }

  addClick() {
    const add = this.props.add();
    if (add) { this.setState({addDisabled: true}); }
    this.setState({minusDisabled: false});
  }

  minusClick() {
    const minus = this.props.minus();
    if (minus <= this.props.minimum) { this.setState({minusDisabled: true}); }
    this.setState({addDisabled: false});
  }

  static getDerivedStateFromProps(props, state) {
    if ((props.total >= 3 && props.total) || (props.maximum && props.who >= props.maximum)) {
      if (props.who <= props.minimum) {
        return {addDisabled: true, minusDisabled: true};
      } else {
        return {addDisabled: true, minusDisabled: false};
      }
    } else {
      return {addDisabled: false};
    }
  }

  render() {
    const minusStyle = this.state.minusDisabled ? style.buttonCounterDisabled : style.buttonCounterEnabled;
    const plusStyle = this.state.addDisabled ? style.buttonCounterDisabled : style.buttonCounterEnabled;
    return (
      <div style={{display: 'table', width: '120px'}}>
        <div style={{display: 'table-cell', verticalAlign: 'middle',textAlign: 'left'}}>
          <button disabled={this.state.minusDisabled} onClick={() => this.minusClick()} style={minusStyle}>
            <span>
              <i className="fas fa-minus"></i>
            </span>
          </button>
        </div>
        <div style={{display: 'table-cell', verticalAlign: 'middle',textAlign: 'middle'}}>
          <div style={style.countrNum}>
            {this.props.who}
          </div>
        </div>
        <div style={{display: 'table-cell', verticalAlign: 'middle',textAlign: 'right'}}>
          <button disabled={this.state.addDisabled} onClick={() => this.addClick()} style={plusStyle}>
            <span>
              <i className="fas fa-plus"></i>
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;