const fs = require('graceful-fs');
const path = require('path');
const faker = require('faker');
const json2csv = require('json2csv').parse;

////////// json2csv npm ///////////
const roomFields = [
  'roomId.int64()',
  'roomName.string()',
  'price.int64()',
  'reviewSummary.string()',
  'type.string()',
  'location.string()',
  'reviewNum.int64()',
  'monthMin.boolean()',
];
const rezFields = [
  'roomId.int64()',
  'rezName.string()',
  'checkIn.string()',
  'checkOut.string()',
  'adults.int64()',
  'children.int64()',
  'infants.int64()'
];

const header = false;
const roomOptsHeader = { roomFields };
const rezOptsHeader = { rezFields };
const roomOptsOther = { header };

/////////////////////////////
// Helper Data & Functions //
/////////////////////////////
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const days31 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const days30 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const days28 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
const type = ['Entire Home', 'Shared Room', 'Private Room'];
const loc = ['San Francisco', 'Los Angeles', 'New York', 'Houston', 'Boston', 'Austin', 'Seattle', 'Paris'];

const generatePrice = () => Math.floor(Math.random() * 150) + 50;
const generateVacancy = () => Math.round(Math.random()) === 0 ? false : true;
const generateReviews = () => (Math.random() * 5).toFixed(1);
const generateReviewNum = () => Math.floor((Math.random() * 120));
const generateType = () => type[Math.floor(Math.random() * type.length)];
const generateLocation = () => loc[Math.floor(Math.random() * loc.length)];
const generateRandomDate = (idx, type) => {
  const year = 2019;
  const month = (idx % 12) + 1;
  const day = (type) => {
    if (type === 'checkIn') {
      return getRandomInt(1, 14);
    } else {
      return getRandomInt(15, 28);
    }
  }
  
  return (year+'-'+month+'-'+day(type));
};

/////////////////////
// Record Generator//
////////////////////
const roomRecordGenerator = (i, id) => {
  const obj = {
    roomId: id,
    roomName: id + '-' + faker.name.findName(),
    price: generatePrice(),
    reviewSummary: generateReviews(),
    type: generateType(),
    location: generateLocation(),
    reviewNum: generateReviewNum(),
    monthMin: generateVacancy(),
  };

  if (i === 0) {
    return (json2csv(obj, roomOptsHeader) + "\n");
  } else {
    return (json2csv(obj, roomOptsOther) + "\n");
  }
}

const reservationRecordGenerator = (i, id) =>{
  const obj = {
    roomId: id,
    rezName: id + '-' + faker.name.findName(),
    checkIn: generateRandomDate(id, 'checkIn'),
    checkOut: generateRandomDate(id, 'checkOut'),
    adults: getRandomInt(1, 4),
    children: getRandomInt(0, 4),
    infants: getRandomInt(0, 2),
  };

  if(i === 0) {
    return (json2csv(obj, rezOptsHeader) + "\n");
  } else {
    return (json2csv(obj, roomOptsOther) + "\n");
  }
}

///////////////////////////
// Write Records to Disk //
///////////////////////////
const TOTAL_RECORDS = 15000000;
const MAX_PER_FILE = 1000000;
let roomsSoFar = 0;
let rezSoFar = 0;

const writeRoomEntries = (totalRecords, recordsPerFile) => {
  console.time('dataGen');
  let i = 0;
  let docID = 1;
  let outputStream = fs.createWriteStream(path.join(__dirname, `roomdata/data${docID}.csv`))// Create the write stream with docID1
  .on('error', (err) => {
    if (err) throw err;
  })

  const write = () => {
    if(i === recordsPerFile) {//Check to see if i === recordsPerFile to initiate stream to new docID
      i = 0
      docID++;
      console.log('Documents Created: ', docID)
      outputStream = fs.createWriteStream(path.join(__dirname, `roomdata/data${docID}.csv`))
      .on('error', (err) =>{
        if (err) throw err;
      })      
    }

    if(roomsSoFar === totalRecords) { //if total 
      console.timeEnd('dataGen');
      return;
    }
    roomsSoFar++;
    const ok2Write = outputStream.write(roomRecordGenerator(i, roomsSoFar));
    if (ok2Write) {
      i++;
      write();
    } else {
      outputStream.once('drain', ()=> {
        write();
      })
    }
  }
  write();
}

const writeRezEntries = (totalRecords, recordsPerFile) => {
  console.time('dataGen');
  let i = 0;
  let docID = 1;
  let outputStream = fs.createWriteStream(path.join(__dirname, `reservationdata/data${docID}.csv`))// Create the write stream with docID1
  .on('error', (err) => {
    if (err) throw err;
  })

  const write = () => {
    if(i === recordsPerFile) {//Check to see if i === recordsPerFile to initiate stream to new docID
      i = 0
      docID++;
      console.log('Documents Created: ', docID)
      outputStream = fs.createWriteStream(path.join(__dirname, `reservationdata/data${docID}.csv`))
      .on('error', (err) =>{
        if (err) throw err;
      })      
    }

    if(rezSoFar === totalRecords) { //if total 
      console.timeEnd('dataGen');
      return;
    }
    rezSoFar++;
    const ok2Write = outputStream.write(reservationRecordGenerator(i, rezSoFar));
    if (ok2Write) {
      i++;
      write();
    } else {
      outputStream.once('drain', ()=> {
        write();
      })
    }
  }
  write();
}
// writeRoomEntries(TOTAL_RECORDS, MAX_PER_FILE);
writeRezEntries(TOTAL_RECORDS, MAX_PER_FILE);
