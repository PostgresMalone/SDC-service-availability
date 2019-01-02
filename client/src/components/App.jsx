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
      listingId: 69
    };
  }

  render() {
    if (Object.keys(this.state.data).length) {
      const date = new Date;
      const id = this.state.listingId;
      const type = this.state.data[id].type;
      const location = this.state.data[id].location;
      const reviews = this.state.data[id].reviewNum;
      const stars = this.state.data[id].reviewSummary;
      const dates = this.state.data[id];
      const price = this.state.data[id][date.getFullYear()][date.getMonth()][date.getDate()]['price'];
      
      return (
        <div>
          <Navbar type={type} location={location} reviews={reviews} stars={stars}
            price={price} click={() => this.showModal()}/>
          <Modal show={this.state.modal} hide={() => this.closeModal()}
            dates={dates} reviews={reviews} stars={stars} price={price}/>
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
    axios.get(`/availabilities/${this.state.listingId}`)
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