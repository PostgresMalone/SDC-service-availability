import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minusDisabled: true,
      addDisabled: false
    }
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

  render() {
    return (
      <div>
        <div>
          <button disabled={this.state.minusDisabled} onClick={() => this.minusClick()}>
            <i className="fas fa-minus"></i>
          </button>
        </div>
        <div>
          <div>
            {this.props.who}
          </div>
        </div>
        <div>
          <button disabled={this.state.addDisabled} onClick={() => this.addClick()}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    );
  }
};

export default Counter;