var db = require("../models");

module.exports = function(app) {
    app.post("/api/agent", function(req, res) {
        db.agent.create({
            name: req.body.name
        })
        // pass the result of our call
            .then(function(dbAgent) {
                // log the result to our terminal/bash window
                console.log(dbAgent);

                // redirect
                res.redirect("/");
            });
    });

    app.get("/api/agent", function(req, res) {
        db.agent.findAll()
            .then(function(dbAgent) {
               res.json(dbAgent);
            });
    });

    app.get("/api/association", function(req, res) {
            res.json([{business_id: 1, agent_id: 1, role: "author"}])
    });

    app.post("/api/:agent/:business/:role", function(req, res) {
        db.agent_business.create({
                agent_id: req.params.agent,
                business_id: req.params.business,
                role: req.params.role
            }
        )
            .then(function(dbAgentBusiness) {
                // log the result to our terminal/bash window
                console.log(dbAgentBusiness);

                // redirect
                res.redirect("/");
            });
    });

    app.post("/api/business", function(req, res) {
        db.business.create({
            name: req.body.name
        })
        // pass the result of our call
            .then(function(dbBusiness) {
                // log the result to our terminal/bash window
                console.log(dbBusiness);

                // redirect
                res.redirect("/");
            });
    });


    app.get("/api/business", function(req, res) {
        db.business.findAll()
            .then(function(dbBusiness) {
                res.json(dbBusiness);
            });
    });
};