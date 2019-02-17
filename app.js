const express = require('express');

const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./server/routes/router');

const env = process.env.NODE_ENV || 'development';
const app = express();

app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

app.use('/', routes);

if (app.get('env') === 'development') {
  app.use((error, req, res, next) => {
    console.log('error was caught in dev error handler. error is ', error);
    res.status(error.status || 500);
    res.json({
      message: error.message,
      error: error
    });
  });
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// production error handler no stacktraces leaked to user
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
    error: {}
  });
});

module.exports = app;
