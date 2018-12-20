const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true }, err => {
  if (err) { return console.log('Failed in connecting to MongoDB.'); }
  console.log('Connected to MongoDB!');
});

const vacancySchema = new Schema({
  roomId: {
    type: Number,
    min: 1,
    max: 100,
    unique: true
  },
  availability: Object
});

const Vacancy = mongoose.model('vacancy', vacancySchema);

const getVacancy = (callback) => {
  Vacancy.find()
    .then(results => callback(results))
    .catch(err => console.log('Error in getting from DB.', err));
};

module.exports = { getVacancy };

// fs.readFile(path.resolve(__dirname, 'data.txt'), (err, data) => {
//   if (err) return console.log('Error in reading file.', err);
//   const parsed = JSON.parse(data);
//   const availabilities = new Vacancy(parsed);
//   availabilities.save((err) => {
//     if (err) return console.log('Error in saving.', err);
//     console.log('Success in saving!');
//   });
// });
