var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyparser = require('body-parser')
require('dotenv').config();


//-------------------------------------Importing Routes

var indexRouter = require('./routes/index');
var employeeRouter = require('./routes/employee');
//-------------------------------------
var app = express();

//-------------------------------------Using modules middlewares
app.use(bodyparser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, 'public')))


//-------------------------------------Connect to DataBase
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("************************Successfully Connected To Database ***********************");
}).catch(console.error);


//-------------------------------------Creating middleware to use my routes
app.use('/', indexRouter);
app.use('/api/employee', employeeRouter);


//-------------------------------------Create and error object,catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});


//-------------------------------------Error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500).send({
        success: false,
        message: err.message
    });
});

module.exports = app;
