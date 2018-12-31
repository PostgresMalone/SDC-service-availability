import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    }
  }

  render() {
    return (
      <div>
        <div>
          <button disabled={this.state.active.toString()}>
            <i className="fas fa-minus"></i>
          </button>
        </div>
        <div>
          <div>
            {this.props.who}
          </div>
        </div>
        <div>
          <button>
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    );
  }
};

export default Counter;