const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const hsts = require('hsts');
const path = require('path');
const xssFilter = require('x-xss-protection');
const nosniff = require('dont-sniff-mimetype');

const app = express();
const port = 3000;

app.use(cors());
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

app.use(express.static(path.join(__dirname, 'public')));

// Setup Routes
const users = require('./routes/users');
app.use('/users', users);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
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

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});