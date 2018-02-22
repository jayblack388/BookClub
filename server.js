// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");
const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./app/models");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/static', express.static(path.join(__dirname, './app/public')));


require("./app/routes/apiRoutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
