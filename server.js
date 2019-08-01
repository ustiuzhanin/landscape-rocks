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
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
        <li>Message: ${req.body.message}</li>
        <li>Product: ${req.body.product}</li>
      </ul>
      <h3>Message:</h3>
      <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'brennan72@ethereal.email',
        pass: '4jb2au5H5BWkbkdnY3'
      }
    });

    let mailOptions = {
      from: 'test@test.com',
      to: 'brennan72@ethereal.email',
      replyTo: 'test@test.com',
      subject: 'New Message',
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }

      res.status(200).console.log('Message sent: %s:', info.response);
      console.log('Message URL: %s:', nodemailer.getTestMessageUrl(info));
    });
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
