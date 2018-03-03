const db = require("../models");
const passport = require("../config/passport");
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
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
        db.Book.findOrCreate({
            where: {title: req.body.title}, 
            defaults: {
                author: req.body.author, 
                description: req.body.description, 
                thumbnail: req.body.thumbnail
            }
        }).spread(function(book, created) {
            db[route].findOrCreate({
                where: {book_id: book.id},
                defaults: {
                    book_id: book.id,
                    user_id: req.user.id
                }
            })
        })
    })
    
    app.get("/Favorites", (req, res) => {
        let resultArr = [];
        let bookIdArr = [];
        db.Favorites.findAll({
            where: {
                user_id: req.user.id
            },
        }).then((results)=>{
            for (let i = 0; i < results.length; i++) {
                let result = results[i];
                resultArr.push(result);
            }
            for (let j = 0; j < resultArr.length; j++) {
                let id = (resultArr[j].dataValues.book_id)
                bookIdArr.push(id)
            }
            db.Book.findAll({
                where: {
                    id: {
                        [Op.or]: bookIdArr
                    }
                }
            }).then((childResults)=>{
                let returnResults = [];
                for (let i = 0; i < childResults.length; i++) {
                    let book = {
                        title: childResults[i].dataValues.title,
                        author: childResults[i].dataValues.author,
                        description: childResults[i].dataValues.description,
                        thumbnail: childResults[i].dataValues.thumbnail,
                    }
                    // console.log(book)
                    // console.log("--------------")
                    returnResults.push(book);
                }
                // console.log(returnResults)
                res.json(returnResults);
            })
        })
    })

    app.get("/Currents", (req, res) => {
        let resultArr = [];
        let bookIdArr = [];
        db.Currents.findAll({
            where: {
                user_id: req.user.id
            },
        }).then((results)=>{
            for (let i = 0; i < results.length; i++) {
                let result = results[i];
                resultArr.push(result);
            }
            for (let j = 0; j < resultArr.length; j++) {
                let id = (resultArr[j].dataValues.book_id)
                bookIdArr.push(id)
            }
            db.Book.findAll({
                where: {
                    id: {
                        [Op.or]: bookIdArr
                    }
                }
            }).then((childResults)=>{
                let returnResults = [];
                for (let i = 0; i < childResults.length; i++) {
                    let book = {
                        title: childResults[i].dataValues.title,
                        author: childResults[i].dataValues.author,
                        description: childResults[i].dataValues.description,
                        thumbnail: childResults[i].dataValues.thumbnail,
                    }
                    // console.log(book)
                    // console.log("--------------")
                    returnResults.push(book);
                }
                // console.log(returnResults)
                res.json(returnResults);
            })
        })
    })

    app.get("/Futures", (req, res) => {
        let resultArr = [];
        let bookIdArr = [];
        db.Futures.findAll({
            where: {
                user_id: req.user.id
            },
        }).then((results)=>{
            for (let i = 0; i < results.length; i++) {
                let result = results[i];
                resultArr.push(result);
            }
            for (let j = 0; j < resultArr.length; j++) {
                let id = (resultArr[j].dataValues.book_id)
                bookIdArr.push(id)
            }
            db.Book.findAll({
                where: {
                    id: {
                        [Op.or]: bookIdArr
                    }
                }
            }).then((childResults)=>{
                let returnResults = [];
                for (let i = 0; i < childResults.length; i++) {
                    let book = {
                        title: childResults[i].dataValues.title,
                        author: childResults[i].dataValues.author,
                        description: childResults[i].dataValues.description,
                        thumbnail: childResults[i].dataValues.thumbnail,
                    }
                    // console.log(book)
                    // console.log("--------------")
                    returnResults.push(book);
                }
                // console.log(returnResults)
                res.json(returnResults);
            })
        })
    })

    app.get("/Previous", (req, res) => {
        let resultArr = [];
        let bookIdArr = [];
        db.Previous.findAll({
            where: {
                user_id: req.user.id
            },
        }).then((results)=>{
            for (let i = 0; i < results.length; i++) {
                let result = results[i];
                resultArr.push(result);
            }
            for (let j = 0; j < resultArr.length; j++) {
                let id = (resultArr[j].dataValues.book_id)
                bookIdArr.push(id)
            }
            db.Book.findAll({
                where: {
                    id: {
                        [Op.or]: bookIdArr
                    }
                }
            }).then((childResults)=>{
                let returnResults = [];
                for (let i = 0; i < childResults.length; i++) {
                    let book = {
                        title: childResults[i].dataValues.title,
                        author: childResults[i].dataValues.author,
                        description: childResults[i].dataValues.description,
                        thumbnail: childResults[i].dataValues.thumbnail,
                    }
                    // console.log(book)
                    // console.log("--------------")
                    returnResults.push(book);
                }
                // console.log(returnResults)
                res.json(returnResults);
            })
        })
    })
};