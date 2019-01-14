const mongoose = require('mongoose');
const { Room, Reservation } = require('./models.js');

mongoose.connect('mongodb://localhost/sdc', { useNewUrlParser: true }, err => {
  if (err) { return console.log('Failed in connecting to MongoDB.'); }
  console.log('Connected to SDC MongoDB!');
});

//mongoimport -d sdc --collection rooms --type csv --columnsHaveTypes --file data1.csv --headerline