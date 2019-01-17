const pg = require('pg');
const config = require('./config.js');

const pool = new pg.Pool(config);

const getAvailabilityById = (id, cb) => {
  pool.query(`SELECT * FROM rooms, reservations WHERE rooms.roomid=reservations.roomid AND rooms.roomid=${id}`, (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(null, results.rows[0]);
    }
  });
};

const modifyAvailabilityById = (id, options, cb) => {
  // TODO: updated query to find and modify reservations table by id
};

module.exports = {
  getAvailabilityById,
  modifyAvailabilityById,
};
