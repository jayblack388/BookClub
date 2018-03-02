const db = require("../models");
const passport = require("../config/passport");
var route;

module.exports = (app) => {

    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        res.json("/home");
    });

    app.post("/api/signup", (req, res) => {
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then( () => {
            res.redirect(307, "/api/login");
        }).catch((err) => {
            console.log(err);
            res.json(err);
        });
    });

    app.get("/logout", (req,res) => {
        req.logout();
        res.redirect("/");
    });

    app.get("/api/user_data", (req, res) => {
        if (!req.user) {
            res.json({});
        }
        else {
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });

    app.post("/add/books/:route?", (req, res)=> {
        route = req.params.route;
        console.log(route)
        db.Book.create({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            thumbnail: req.body.thumb
        }).then((book) => {
            app.post(`/add/${route}`, (childReq, childRes) => {
                
            })
        })
    })

};