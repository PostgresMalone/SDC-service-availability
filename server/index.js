const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname + '/../public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/availabilities/:id', (req, res) => {
  const listingId = req.params.id;
  db.getVacancy(listingId, result => {
    res.status(200).send(JSON.stringify(result));
  });
});

app.put('/availabilities/:id', (req, res) => {
  const listingId = req.params.id;
  
});

const port = 1001;

app.listen(port, (err) => {
  if (err) { return console.log('Failed to connect to server.'); }
  console.log(`Listening to http://localhost:${port}`);
});