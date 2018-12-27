import React from 'react';
import Navbar from './Navbar.jsx';
import axios from 'axios';
import Modal from './Modal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      modal: false,
      listingId: 23
    };
  }

  render() {
    if (Object.keys(this.state.data).length) {
      const date = new Date;
      return (
        <div>
          <Navbar type={this.state.data[this.state.listingId].type} location={this.state.data[this.state.listingId].location}
            reviews={this.state.data[this.state.listingId].reviewNum} stars={this.state.data[this.state.listingId].reviewSummary}
            year={this.state.data[this.state.listingId][date.getFullYear()]} click={() => this.showModal()}/>
          <Modal show={this.state.modal} hide={() => this.closeModal()}
            dates={this.state.data[this.state.listingId]}/>
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