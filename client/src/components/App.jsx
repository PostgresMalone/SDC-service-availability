import React from 'react';
import Navbar from './Navbar.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  render() {
    console.log(this.state.data[1]);
    if (Object.keys(this.state.data).length) {
      return (
        <div>
          <Navbar type={this.state.data[1].type} location={this.state.data[1].location}
          reviews={this.state.data[1].reviewsummary}/>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  }

  componentDidMount() {
    axios.get('/availabilities')
      .then(result => {
        const data = result.data[0].availability;
        this.setState({data});
      })
      .catch(err => console.log('Err in getting data', err));
  }

}

export default App;