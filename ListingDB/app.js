var express     = require("express");
var app         = express();
var bodyParser  = require("body-parser");
var mongoose    = require("mongoose");

//database connection
mongoose.connect("mongodb://localhost/LostAndFound_Listing");

//setting ejs files as the defaults
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

