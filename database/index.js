const mongoose = require('mongoose');
const { Room, Reservation } = require('./models.js');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true }, err => {
  if (err) { return console.log('Failed in connecting to MongoDB.'); }
  console.log('Connected to MongoDB!');
});

const getVacancy = (listingId, callback) => {
  Reservation.find({roomId: listingId})
    .then(results => callback(results))
    .catch(err => console.log('Error in getting from DB.', err));
};

const saveVacancy = (data) => {
  Reservation.collection.drop({} , err => {
    if (err) { return console.log('Error in dropping', err); }
    Reservation.insertMany(data, err => {
      if (err) { return console.log('Error in seeding.', err); }
      mongoose.connection.close();
    });
  });
};

const updateVacancy = (listingId, updatedObj, callback) => { // delete this callback later
  Reservation.update({roomId: listingId}, {availability: updatedObj}, (err, raw) => {
    if (err) { return console.log('Err in database in saving, error ', raw); }
    callback(null);
  });
};

module.exports = { getVacancy, updateVacancy, saveVacancy };