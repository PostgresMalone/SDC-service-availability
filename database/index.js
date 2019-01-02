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

const getVacancy = (listingId, callback) => {
  Vacancy.find({roomId: listingId})
    .then(results => callback(results))
    .catch(err => console.log('Error in getting from DB.', err));
};

module.exports = { getVacancy };