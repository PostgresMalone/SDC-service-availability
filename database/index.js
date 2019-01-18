const pg = require('pg');
const config = require('./config.js');
const faker = require('faker');

const pool = new pg.Pool(config);

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

const getReservationsById = (id, cb) => {
  pool.connect()
    .then((client) => {
      return client.query(`SELECT * FROM rooms, reservations WHERE rooms.roomid=reservations.roomid AND rooms.roomid=${id}`)
        .then((res) => {
          client.release();
          cb(null, res.rows[0]);
        })
        .catch((err) => {
          client.release();
          cb(err.stack);
        });
    });
};

const modifyAvailabilityById = (id, options, cb) => {
  let rezName = id + '-' + faker.name.findName();
  pool.connect()
    .then((client) => {
      return client.query(`INSERT INTO reservations VALUES (${id},'${rezName}','${options.checkIn}','${options.checkOut}',${options.adults},${options.children},${options.infants})`)
        .then((res) => {
          client.release();
          cb(null, res.rows[0]);
        })
        .catch((err) => {
          client.release();
          cb(err.stack);
        });
    });
};

const createNewRez = (id, options, cb) => {

};

module.exports = {
  getReservationsById,
  modifyAvailabilityById,
  createNewRez,
};
