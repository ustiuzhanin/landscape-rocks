const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

// view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// static folder
app.use('/clinet', express.static(path.join(__dirname, 'client')));

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.post('/api/form', (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
