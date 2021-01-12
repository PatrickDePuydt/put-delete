const express = require('express');
const layouts = require('express-ejs-layouts');

const path = require('path');
const app = express();

app.set('view engine', 'ejs'); // or Pug/handlebars
app.use(layouts);
app.use(express.static(path.join(__dirname, '/static')));
app.use(express.urlencoded({ extended: false })); // Body parsing middleware

app.get('/', (req, res) => {
  res.render('home');
});

app.use('/dinos', require('./routes/dinos'));

app.listen(3000, () => console.log(`Listening on port 3000`));