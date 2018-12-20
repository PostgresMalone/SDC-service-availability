const mongoose = require('mongoose');
const fs = require('fs');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/vacancy');

const vacancySchema = new Schema({
  roomId: {
    location: String,
    type: String,
    reviewsummary: Number,
    years: {
      months: {
        days: {
          vacancy: Boolean,
          price: Number
        }
      }
    }
  }
});

const Vacancy = mongoose.model('vacancy', vacancySchema);

fs.readFile('data.txt', (err, data) => {
  if (err) return console.log('Error in reading file.');
  const parsed = JSON.parse(data);
  const availabilities = new Vacancy(parsed);
  availabilities.save();
});