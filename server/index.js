require('newrelic');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const { createNewRez, getReservationsById, modifyAvailabilityById, deleteRezByName } = require('../database/index');

const app = express();

app.use('/availabilities/:id', express.static('public'));
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/api/availabilities/:id/reservations', (req, res, next) => {
  const id = req.params.id;
  getReservationsById(id, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

app.put('/api/availabilities/:id/reservations', (req, res, next) => {
  // TODO: write a function to find and update a reservation
});

app.post('/api/availabilities/:id/reservations', (req, res, next) => {
  const id = req.params.id;
  const options = req.body;
  console.log('Booking request heard by server: ', id, options);
  createNewRez(id, options, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send('Booking Created!');
    }
  });
});

app.delete('/api/availabilities/:id/reservations', (req, res, next) => {
  const id = req.params.id;
  const rezName = req.body.rezName;
  deleteRezByName(id, rezName, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(20).send('Booking Deleted');
    }
  });
});

const port = 1001;

app.listen(port, (err) => {
  if (err) { return console.log('Failed to connect to server.'); }
  console.log(`Listening to http://localhost:${port}`);
});