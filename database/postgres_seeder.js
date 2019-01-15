const { Pool } = require('pg');

const pool = new Pool({
  user: 'Meandeane',
  host: 'localhost',
  database: 'sdc',
});

pool.on('error', (err) => {
  throw err;
});

// const seedRoomData = () => {
//   for (let i = 1; i <= 15; i++) {
//     console.log(`File: ${i} Loaded`);
//     const roomDataPath = `/Users/Meandeane/Documents/GitHub/SDC-service-availability/database/roomdata/data${i}.csv`;
//     pool.query(`COPY rooms FROM \'${roomDataPath}\' WITH (FORMAT csv, HEADER true)`, (err, result) => {
//       if (err) {
//         throw err
//       }
//     });
//   }
// };

const seedRezData = () => {
  for (let i = 1; i <=15; i++) {
    const rezDataPath = `/Users/Meandeane/Documents/GitHub/SDC-service-availability/database/reservationdata/data${i}.csv`;
    pool.query(`COPY reservations FROM \'${rezDataPath}\' WITH (FORMAT csv, HEADER true)`, (err, result) => {
      if (err) {
        throw err
      }
    });
  }
};

// seedRoomData();

seedRezData();

pool.end();
