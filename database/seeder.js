const fs = require('fs');
const path = require('path');
const db = require('./index.js');

let database = [];
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
  let obj = {}
  obj.roomId = i;
  obj.availability = {};
  obj.availability['reviewSummary'] = generateReviews();
  obj.availability['type'] = generateType();
  obj.availability['location'] = generateLocation();
  obj.availability['reviewNum'] = generateReviewNum();
  obj.availability['monthMin'] = generateVacancy();
  years.map(year => {
    obj.availability[year] = {};
    months.map(month => {
      obj.availability[year][month] = {};
      daysAssigner(obj.availability[year], month, year);
    });
  });
  database.push(obj);
}

fs.writeFile(path.resolve(__dirname, 'data.txt'), JSON.stringify(database), err => {
  if (err) { return console.log('Error in writing', err); }
  fs.readFile(path.resolve(__dirname, 'data.txt'), (err, data) => {
    if (err) { return console.log('Error in reading file.', err); }
    const parsed = JSON.parse(data);
    db.saveVacancy(parsed);
  });
});