const fs = require('graceful-fs');
const path = require('path');
const db = require('./index.js');
const faker = require('faker');
const ProgressBar = require('progress');
// const csvWriter = require('csv-write-stream');
const json2csv = require('json2csv').parse;


/////////////////////////////
// Helper Data & Functions //
/////////////////////////////
let database = [];
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const years = ['2019'];
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

///////////////////
// Progress Bar //
//////////////////
// const bar = new ProgressBar(':bar', {total: 100});
// const timer = setInterval(() => {
//   bar.tick();
//   if (bar.complete) {
//     console.log('\ncomplete\n');
//     clearInterval(timer);
//   }
// }, 10000);

/////////////////////////////////
// Record Generation and Write //
/////////////////////////////////
const TOTAL_RECORDS = 2;
let i = 0;

//>>> Create Read and Write Streams <<<//

////////// csv-write-stream npm ///////////
// const writer = csvWriter({headers: [ 
//   'roomId',
//   'availability',
//   'reviewSummary',
//   'type',
//   'location',
//   'reviewNum',
//   'monthMin',
//   ]});
// writer.pipe(fs.createWriteStream(__dirname + '/data.csv'));

////////// json2csv npm ///////////
const outputStream = fs.createWriteStream(__dirname + '/data.csv');
const fields = [
  'roomId',
  'availability',
  'reviewSummary',
  'type',
  'location',
  'reviewNum',
  'monthMin',
];
const flatten = true;
const quote = true;
const header = false;


const writeEntries = () => {

  while(i < TOTAL_RECORDS) {

    let obj = {
      roomId: i,
      availability: {},
      reviewSummary: generateReviews(),
      type: generateType(),
      location: generateLocation(),
      reviewNum: generateReviewNum(),
      monthMin: generateVacancy(),
    }
    //Availability calendar generator
    obj.availability[2019] = {};
      months.map(month => {
        obj.availability[2019][month] = {};
        daysAssigner(obj.availability[2019], month, 2019);
      });
      
    if(i === 0) {
      const opts = { fields, quote };
      fs.appendFileSync(__dirname + '/data.csv', json2csv(obj, opts) + '/n');
    }else {
      const opts = {header, quote};
      fs.appendFileSync(__dirname + '/data.csv', json2csv(obj, opts));
      // if(!outputStream.write(json2csv(obj, opts))) { 
      //   return;
      // }
    }
    i++;
  }

  outputStream.end(() => {
    console.log('Done');
    process.exit();
  })  
}

outputStream.on('drain', () => {
  writeEntries();
});

writeEntries();



//>>>>>>>>>> Data Shape <<<<<<<<<<//
// data = [
//   {
//     roomId: integer,
//     availability: {
//       "year": {
//         "month": {
//           "day": {
//             price: integer,
//             vacancy: boolean,
//           }
//         }
//       }
//     }
//   },
//   {
//     roomId: integer,
//     availability: {
//       year: {
//         month: {
//           day: {
//             price: integer,
//             vacancy: boolean,
//           }
//         }
//       }
//     }
//   },
// ]