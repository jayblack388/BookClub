const path = require("path");

const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = (app) => {

    app.get("/", (req, res) => {
        // res.render('pages/index');

        if (req.user) {
            res.redirect("/home");
        }
        res.render('pages/search');

    });

    app.get("/login", (req, res) => {
        if (req.user) {
            res.redirect("/home");
        }
        res.render('pages/login');
    });

    app.get("/home", isAuthenticated, (req, res) => {
        res.render("pages/home");
    });

    app.get("/search", isAuthenticated, (req, res) => {
        res.render("pages/search");
    });

};