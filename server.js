// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const ejs = require("ejs");
const passport = require("./app/config/passport");
const PORT = process.env.PORT || 8080;
const db = require("./app/models");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, './app/public')));

app.use(session({secret: "bookathon", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());


require("./app/routes/apiRoutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
});
