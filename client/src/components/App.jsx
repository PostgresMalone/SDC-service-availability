import React from 'react';
import Navbar from './Navbar.jsx';
import axios from 'axios';
import Modal from './Modal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      modal: false
    };
  }

  render() {
    if (Object.keys(this.state.data).length) {
      const date = new Date;
      return (
        <div>
          <Navbar type={this.state.data[1].type} location={this.state.data[1].location}
            reviews={this.state.data[1].reviewnum} stars={this.state.data[1].reviewsummary}
            year={this.state.data[1][date.getFullYear() + 1]} click={() => this.showModal()}/>
          <Modal show={this.state.modal} hide={() => this.closeModal()}/>
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

  showModal() {
    this.setState({modal: true});
  }

  closeModal() {
    this.setState({modal: false});
  }

}

export default App;