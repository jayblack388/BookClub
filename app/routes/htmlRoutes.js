const path = require("path");

const isAuthenticated = require("../config/middleware/isAuthenticated");

const db = require("../models");

var items = [
{
    title: "book 1",
    author: "author 1",
    thumb: "thumb 1"
}, {
    title: "book 2",
    author: "author 2",
    thumb: "thumb 2"
}, {
    title: "book no 3",
    author: "author no 3",
    thumb: "thumb no 3"
}];



module.exports = (app) => {

    app.get("/", (req, res) => {
        // res.render('pages/index');

        if (req.user) {
            res.redirect("/home");
        }
        res.render('pages/login');

    });

    app.get("/login", (req, res) => {
        if (req.user) {
            res.redirect("/home");
        }
        res.render('pages/login');
    });


    app.get("/home", isAuthenticated, (req, res) => {

        /***********************************************************************
        SAHIR'S STUFF!
        ***********************************************************************/
        
        function gatherUserData(Route) {
            return new Promise((resolve, reject) => {
                var array = [];
                db[Route].findAll({
                    where: {user_id: req.user.id}
                }).then( data => {
                    if (data.length > 0) {
                        data.forEach( entry => {

                            var bookId = entry.book_id;
                            db.Book.findAll({
                                where: {id: bookId}
                            }).then( childData => {
                                var obj = {
                                    title: childData[0].title,
                                    author: childData[0].author,
                                    thumb: childData[0].thumbnail
                                };
                                array.push(obj);
                                
                                if (array.length == data.length) {
                                    console.log("array");
                                    console.log(array);
                                    resolve(array);
                                }
                            });
                        });
                    } else {
                        resolve(items);
                    }
                });
            });
        }

        function renderEJS(faves, futrs, crnts, prevs, username) {
            res.render("pages/search", {
                faves: faves,
                futrs: futrs,
                crnts: crnts,
                prevs: prevs,
                username: username
            });
        }

        gatherUserData("Favorites").then( array1 => {
            gatherUserData("Futures").then( array2 => {
                gatherUserData("Currents").then( array3 => {
                    gatherUserData("Previous").then( array4 => {
                        var username = req.user.email;
                        renderEJS(array1, array2, array3, array4, username);
                    });
                });
            });
        });

    });

    app.get("/search", isAuthenticated, (req, res) => {
        res.render("pages/search", {
            items: items
        });
    });

};