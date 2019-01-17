const pg = require('pg');
const config = require('./config.js');

const pool = new pg.Pool(config);

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

const getAvailabilityById = (id, cb) => {
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
  // TODO: updated query to find and modify reservations table by id
};

module.exports = {
  getAvailabilityById,
  modifyAvailabilityById,
};
