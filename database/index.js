const mongoose = require('mongoose');
const fs = require('fs');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/vacancy');

const Availabilities = new Schema('availabilities', {
  roomId: {
    years: {
      months: {
        days: {
          vacancy: Boolean,
          price: Number,
          location: String,
          type: String,
          reviewsummary: Number
        }
      }
    }
  }
});

fs.readFile('data.txt', (err, data) => {
  if (err) return console.log('Error in reading file.');
  const parsed = JSON.parse(data);
  const availabilities = new Availabilities(parsed);
  availabilities.save();
});