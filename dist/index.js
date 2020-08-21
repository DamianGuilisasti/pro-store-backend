"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var morgan = require('morgan');

var cors = require('cors');

var app = (0, _express["default"])(); //Middlewares

app.use(morgan('dev'));
app.use(cors());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
})); // Settings

app.set('port', process.env.PORT || 4000); // Start the Server

app.listen(app.get('port'), function () {
  console.log('estoy escuchando en el puerto:', app.get('port'));
});