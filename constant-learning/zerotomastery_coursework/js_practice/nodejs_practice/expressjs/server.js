// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(express.static(__dirname + '/public'));

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use((req, res, next) => {
//   console.log('<h1>Hello!</h1>');
//   next();
// });

// app.get('/', (req, res) => {
// console.log(req.query);
// req.body;
// console.log(req.headers);
// req.params;
// res.status(404).res.send('not found');
// });

// app.get('/profile', (req, res) => {
//   res.send('getting profile');
// });

// app.post('/profile', (req, res) => {
//   console.log(req.body);
//   res.send('Success');
// });

// app.listen(3000);

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
  console.time('funchallenge');
  if (err) {
    console.log('error!');
  }
  console.log('Async:', data.toString('utf8'));
  console.timeEnd('funchallenge');
});

const file = fs.readFileSync('./hello.txt');
console.log('Sync:', file.toString('utf8'));

// APPEND
// fs.appendFile('./hello.txt', ' This is so cool!', (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

//WRITE
// fs.writeFile('bye.txt', 'sad to see you go', (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// DELETE
fs.unlink('./bye.txt', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Inception');
});
