const config = require('./config/config')
const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./server/routes/index');
const apiRouter = require('./server/routes/api');
const response = require('./server/helpers/response');

const app = express();
const port = 3000;

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(config.db.url, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected.');
});

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/api/', apiRouter);


app.all('*', (req, res) => {
    return response.notFoundResponse(res, 'Page not found!');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;