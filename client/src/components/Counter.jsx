import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
    }
  }

  addClick() {
    this.props.add();
    this.setState({disabled: false});
  }

  render() {
    return (
      <div>
        <div>
          <button disabled={this.state.disabled}>
            <i className="fas fa-minus"></i>
          </button>
        </div>
        <div>
          <div>
            {this.props.who}
          </div>
        </div>
        <div>
          <button onClick={() => this.addClick()}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    );
  }
};

export default Counter;