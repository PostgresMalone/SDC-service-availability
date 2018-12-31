const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Schema = mongoose.Schema;

let database = {availability: {}};
const months = Array.from(Array(12), (el, ind) => ind);
const years = ['2018', '2019', '2020', '2021'];
const days31 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const days30 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const days28 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
const type = ['Entire Apartment', 'Shared Room'];
const loc = ['San Francisco', 'Los Angeles', 'New York', 'Houston', 'Boston'];

const generatePrice = () => Math.floor(Math.random() * 150) + 50;
const generateVacancy = () => Math.round(Math.random()) === 0 ? false : true;
const generateReviews = () => (Math.random() * 5).toFixed(1);
const generateReviewNum = () => Math.floor((Math.random() * 120));
const generateType = () => type[Math.floor(Math.random() * 2)];
const generateLocation = () => loc[Math.floor(Math.random() * 5)];

const generateInfo = () => {
  return {
    price: generatePrice(),
    vacancy: generateVacancy()
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
  } else if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
    days31.map(day => {
      databaseUpToYear[month][day] = generateInfo();
    });
  } else {
    days30.map(day => {
      databaseUpToYear[month][day] = generateInfo();
    });
  }
};

for (let i = 1; i < 101; i++) {
  database.availability[i] = {};
  database.availability[i]['reviewSummary'] = generateReviews();
  database.availability[i]['type'] = generateType();
  database.availability[i]['location'] = generateLocation();
  database.availability[i]['reviewNum'] = generateReviewNum();
  database.availability[i]['monthMin'] = generateVacancy();
  years.map(year => {
    database.availability[i][year] = {};
    months.map(month => {
      database.availability[i][year][month] = {};
      daysAssigner(database.availability[i][year], month, year);
    });
  });
}

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

fs.writeFile(path.resolve(__dirname, 'data.txt'), JSON.stringify(database), err => {
  if (err) { return console.log('Error in writing', err); }
  mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true }, err => {
    if (err) { return console.log('Failed in connecting to MongoDB.', err); }
    console.log('Connected to MongoDB!');
    fs.readFile(path.resolve(__dirname, 'data.txt'), (err, data) => {
      if (err) { return console.log('Error in reading file.', err); }
      const parsed = JSON.parse(data);
      const availabilities = new Vacancy(parsed);
      availabilities.save((err) => {
        mongoose.connection.close(); 
        if (err) { return console.log('Error in saving.', err); }
        console.log('Success in saving!');
      });
    });
  });
});

console.log(database);