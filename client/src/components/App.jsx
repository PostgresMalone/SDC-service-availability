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
    return (
      <div>
        <Navbar />
      </div>
    );
  }

  componentDidMount() {
    axios.get('/availabilities')
      .then(data => {
        this.setState({data});
      })
      .catch(err => console.log('Err in getting data', err));
  }

}

export default App;