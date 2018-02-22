const db = require("../models");
const path = require("path");

module.exports = function(app) {
    app.get("/", (req, res)=>{
        // res.render('pages/index');
        res.sendFile(path.join(__dirname, "../public/html/register.html"));
    });
    app.get("/search", (req, res)=>{
        res.render('pages/search');
        // res.sendFile(path.join(__dirname, "../public/html/user.html"));
    });
}