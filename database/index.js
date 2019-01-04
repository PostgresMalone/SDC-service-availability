const mongoose = require('mongoose');
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

const saveVacancy = (data) => {
  Vacancy.collection.drop()
    .then(
    Vacancy.insertMany(data, err => {
      if (err) { return console.log('Error in seeding.', err); }
      Vacancy.drop
      mongoose.connection.close();
    }));
};

const updateVacancy = (listingId, updatedObj, callback) => { // delete this callback later
  Vacancy.update({roomId: listingId}, {availability: updatedObj}, (err, raw) => {
    if (err) { return console.log('Err in database in saving, error ', raw); }
    callback(null);
  });
};

module.exports = { getVacancy, updateVacancy, saveVacancy };