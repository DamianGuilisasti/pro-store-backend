"use strict";

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
require("dotenv").config(); // DB Connection


require("./database"); // Inicializations


const app = (0, _express.default)(); // Settings

app.set("port", process.env.PORT || 3005); //Middlewares

app.use((0, _morgan.default)("dev"));
app.use((0, _cors.default)());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_express.default.json()); // Routes

app.use("/api", _routes.default); // Static Files

app.use(_express.default.static(_path.default.join(__dirname, "public"))); // Start the Server

app.listen(app.get("port"), () => {
  console.log("Server on port:", app.get("port"));
});