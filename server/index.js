require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { getAvailabilityById } = require('../database/index');

const app = express();

app.use(express.static(path.resolve(__dirname, '/../public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/availabilities', (req, res, next) => {
  // TODO: Write function here to retrieve all roomId reservations
});

app.get('/availabilities/:id', (req, res, next) => {
  const id = req.params.id;
  getAvailabilityById(id, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

app.put('/availabilities/:id', (req, res, next) => {
  // TODO: Write a function to modify a reservation
});

app.post('/availabilities', (req, res, next) => {
  // TODO: Write a function to insert a new room record and empty reservation object
});

const port = 1001;

app.listen(port, (err) => {
  if (err) { return console.log('Failed to connect to server.'); }
  console.log(`Listening to http://localhost:${port}`);
});