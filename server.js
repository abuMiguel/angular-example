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

app.get('/api/members', (req, res) => {
  request('http://localhost:3000/members', (err, response, body) => {
    if (response.statusCode <= 500) {
      res.send(body);
    }
  });
});

app.get('/api/teams', (req, res) => {
  request('http://localhost:3000/teams', (err, response, body) => {
    if (response.statusCode <= 500) {
      res.send(body);
    }
  });
});

app.post('/api/addMember', hasBody, async (req, res, next) => {

  let member = req.body;
  if (!member.firstName || !member.lastName || !member.jobTitle || !member.team || !member.status) {
    next(new Error("Unable to add member. Missing at least one of the parameters."));
  }

  try {
    const response = await axios.post('http://localhost:3000/members', member);
    res.sendStatus(response.status);
  }
  catch (e) {
    next(e);
  }
});

app.post('/api/editMember', hasBody, async (req, res, next) => {

  let member = req.body;
  if (!member.firstName || !member.lastName || !member.jobTitle || !member.team || !member.status) {
    next(new Error("Unable to edit member. Missing at least one of the parameters."));
  }

  try {
    const response = await axios.put(`http://localhost:3000/members/${member.id}`, member);
    res.sendStatus(response.status);
  }
  catch (e) {
    next(e);
  }
});

app.delete('/api/deleteMember/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    const response = await axios.delete(`http://localhost:3000/members/${id}`);
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