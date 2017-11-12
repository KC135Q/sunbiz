var express     = require("express");
var bodyParser  = require("body-parser");
var exphbs      = require("express-handlebars");

var app   = express();
var PORT  = process.env.PORT || 8080;

var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Sets up Handlebars app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/web.js")(app);
require("./routes/api.js")(app);
app.get("/:notapage?", function(req, res) {
    res.render("404");
});

// Syncing our sequelize models then start Express app
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});