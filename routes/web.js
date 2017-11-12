var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/add-agent", function(req, res) {
        res.render("add-agent");
    });

    app.get("/add-business", function(req, res) {
        res.render("add-business");
    });
};