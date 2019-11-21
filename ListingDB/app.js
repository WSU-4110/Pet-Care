/**
 *  Author: Omar Rahman
 *  
 *  Description: File for adding lost animals
 */

var express     = require("express");
var app         = express();
var bodyParser  = require("body-parser");
var mongoose    = require("mongoose");

//database connection
mongoose.connect("mongodb://localhost/LostAndFound_Listing");

//setting ejs files as the defaults
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var listingSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone_number:Number,
    image: String,

 });
 
 //modeling an obeject after the schema
var Listing = mongoose.model("Listing", listingSchema);

Listing.create(
    {
        name:"Andy Smith",
        email: "andy@yahoo.net",
        phone_number: 5683787771,
        image: "https://www.homeagain.com/static/images/articles/found-pet-tips.jpg"
        
    },
    function(err, list){
     if(err){
         console.log(err);
     } else {
         console.log("New Listing: ");
         console.log(list);
     }
});

//
//CREATE - add new campground to DB
app.post("/listing", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var email = req.body.email;
    var phone_number = req.body.phone_number;
    var newListing = {name: name, image: image, email:email, phone_number:phone_number}
    // Create a new campground and save to DB
    Campground.create(newListing, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});



//listhening port for the app
app.listen(3000,function(){
    console.log("Server has started on port 3000");
});
