const fs = require('fs');

let database = {availability: {}};
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const years = ['2019', '2020', '2021'];
const days31 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const days30 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const days28 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
const type = ['Entire Apartment', 'Shared Room'];
const loc = ['San Francisco', 'Los Angeles', 'New York', 'Houston', 'Boston'];

const generatePrice = () => Math.floor(Math.random() * 150) + 50;
const generateVacancy = () => Math.round(Math.random()) === 0 ? false : true;
const generateReviews = () => (Math.random() * 5).toFixed(1);
const generateType = () => type[Math.floor(Math.random() * 2)];
const generateLocation = () => loc[Math.floor(Math.random() * 5)];

const generateInfo = () => {
  return {
    price: generatePrice(),
    vacancy: generateVacancy()
  };
};

const daysAssigner = (databaseUpToYear, month) => {
  if (month === 'February') {
    days28.map(day => {
      databaseUpToYear[month][day] = generateInfo();
    });
  } else if (month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December') {
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
  database.availability[i]['reviewsummary'] = generateReviews();
  database.availability[i]['type'] = generateType();
  database.availability[i]['location'] = generateLocation();
  years.map(year => {
    database.availability[i][year] = {};
    months.map(month => {
      database.availability[i][year][month] = {};
      daysAssigner(database.availability[i][year], month);
    });
  });
}

fs.writeFile('data.txt', JSON.stringify(database), (err, data) => {
  if (err) { return console.log('Error in writing', err); }
  console.log('Success!', data);
});

console.log(database);