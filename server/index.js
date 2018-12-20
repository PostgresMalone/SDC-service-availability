const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/availabilities', (req, res) => {
  db.getVacancy(result => {
    res.status(200).send(JSON.stringify(result));
  });
});

const port = 1001;

app.listen(port, (err) => {
  if (err) { return console.log('Failed to connect to server.'); }
  console.log(`Listening to http://localhost:${port}`);
});