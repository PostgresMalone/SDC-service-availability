const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true }, err => {
  if (err) return console.log('Failed in connecting to MongoDB.');
  console.log('Connected to MongoDB!');
});

const vacancySchema = new Schema({
  availability: {
    roomId: {
      location: String,
      type: String,
      reviewsummary: String,
      years: {
        months: {
          days: {
            vacancy: Boolean,
            price: Number
          }
        }
      }
    }
  }
});

const Vacancy = mongoose.model('vacancy', vacancySchema);

fs.readFile(path.resolve(__dirname, 'data.txt'), (err, data) => {
  if (err) return console.log('Error in reading file.', err);
  const parsed = JSON.parse(data);
  const availabilities = new Vacancy(parsed);
  availabilities.save((err) => {
    if (err) return console.log('Error in saving.', err);
    console.log('Success in saving!');
  });
});