const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
var hsts = require('hsts');
const path = require('path');
var xssFilter = require('x-xss-protection');
var nosniff = require('dont-sniff-mimetype');
const request = require('request');
const axios = require('axios')

const app = express();

app.use(cors());
app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable('x-powered-by');
app.use(xssFilter());
app.use(nosniff());
app.set('etag', false);
app.use(
  helmet({
    noCache: true
  })
);
app.use(
  hsts({
    maxAge: 15552000 // 180 days in seconds
  })
);

app.use(
  express.static(path.join(__dirname, 'dist/angular-example'), {
    etag: false
  })
);

// Sample code for getting a list of users
app.get('/api/users', (req, res) => {
  request('http://localhost:3000/users', (err, response, body) => {
    if (response.statusCode <= 500) {
      res.send(body);
    }
  });
});

// Sample code for getting a list of data
app.get('/api/selections', (req, res) => {
  request('http://localhost:3000/selections', (err, response, body) => {
    if (response.statusCode <= 500) {
      res.send(body);
    }
  });
});

// Sample code for adding a user
app.post('/api/addUser', hasBody, async (req, res, next) => {

  let user = req.body;
  if (!user.firstName || !user.lastName || !user.title) {
    next(new Error("Unable to add user. Missing at least one of the parameters."));
  }

  try {
    const response = await axios.post('http://localhost:3000/users', user);
    res.sendStatus(response.status);
  }
  catch (e) {
    next(e);
  }
});

// Sample code for editing a user
app.post('/api/editUser', hasBody, async (req, res, next) => {

  let user = req.body;
  if (!user.firstName || !user.lastName || !user.title) {
    next(new Error("Unable to edit user. Missing at least one of the parameters."));
  }

  try {
    const response = await axios.put(`http://localhost:3000/user/${user.id}`, user);
    res.sendStatus(response.status);
  }
  catch (e) {
    next(e);
  }
});

// Sample code for deleting a user
app.delete('/api/deleteUser/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    const response = await axios.delete(`http://localhost:3000/users/${id}`);
    res.sendStatus(response.status);
  }
  catch (e) {
    next(e);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-example/index.html'));
});

app.listen('8000', () => {
  console.log('Server starting...');
});

app.use(async function (err, req, res, next) {
  res.status(500).send(err.stack);
});

function hasBody(req, res, next) {
  if (req.body) {
    return next();
  } else {
    return res.send(422);
  }
}