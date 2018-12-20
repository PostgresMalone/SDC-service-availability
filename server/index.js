const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));

const port = 1001;

app.listen(port, (err) => {
  if (err) return console.log('Failed to connect to server.');
  console.log(`Listening to http://localhost:${port}`);
});