import React from 'react';
import urlParser from 'url-parse';
import Navbar from './Navbar.jsx';
import axios from 'axios';
import Modal from './Modal.jsx';
import style from '../scripts/style.css.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: null,
      price: 0,
      reviewSummary: null,
      type: null,
      location: null,
      reviewNum: null,
      monthMin: null,
      data: {},
      modal: false,
    };
  }

  render() {
    if (Object.keys(this.state.data).length) {
      const date = new Date;
      const id = this.state.listingId;
      const type = this.state.type;
      const location = this.state.location;
      const reviews = this.state.reviewNum;
      const stars = this.state.reviewSummary;
      const dates = this.state.data.availability;
      const price = this.state.price
      
      return (
        <div>
          <Navbar 
            type={type} 
            location={location} 
            reviews={reviews} 
            stars={stars}
            price={price} click={() => this.showModal()}
          />
          <Modal 
            show={this.state.modal} 
            hide={() => this.closeModal()}
            dates={dates} 
            reviews={reviews} 
            stars={stars} 
            price={price}
            id={id}
          />
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
    let availability = this.generateCalendar();
    let pathname = urlParser().pathname;
    let roomId = Number(pathname.split('/')[2]);
    document.body.style.margin = '0';

    fetch(`/api/availabilities/${roomId}/reservations`)
      .then(result => {
        return result.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          listingId: roomId,
          price: data.price,
          reviewSummary: data.reviewsummary,
          type: data.type,
          location: data.location,
          reviewNum: data.reviewnum,
          monthMin: data.monthmin,
          data: availability,
        });
      })
      .catch(err => console.log('Err in getting data', err));
  }

  showModal() {
    this.setState({modal: true});
  }

  closeModal() {
    this.setState({modal: false});
  }

  generateCalendar() {
    const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const years = ['2019'];
    const days31 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const days30 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    const days28 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
  
    const generateInfo = () => {
      return {
        price: 0,
        vacancy: true,
      };
    };
  
    const daysAssigner = (databaseUpToYear, month, year) => {
      if (month === 1) {
        days28.map(day => {
          databaseUpToYear[month][day] = generateInfo();
        });
        if (year % 4 === 0) {
          databaseUpToYear[month][29] = generateInfo();
        }
      } else if (month === 3 || month === 5 || month === 8 || month === 10) {
        days30.map(day => {
          databaseUpToYear[month][day] = generateInfo();
        });
      } else {
        days31.map(day => {
          databaseUpToYear[month][day] = generateInfo();
        });
      }
    };
    
    let obj = {}
    obj.availability= {};
    obj.availability['reviewSummary'] = null;
    obj.availability['type'] = null;
    obj.availability['location'] = null;
    obj.availability['reviewNum'] = null;
    obj.availability['monthMin'] = null;
    years.map(year => {
      obj.availability[year] = {};
      months.map(month => {
        obj.availability[year][month] = {};
        daysAssigner(obj.availability[year], month, year);
      });
    });
    return obj;
  }

}

export default App;