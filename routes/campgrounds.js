var express    = require("express");
var router     = express.Router();
var Campground = require("../models/campgrounds");
var middleware = require("../middleware");

//INDEX - show all campgrounds
router.get("/", function(req, res){
   //Get all campgrounds from DB
   Campground.find({}, function(err, allcampgrounds){
      if(err){
          console.log(err);
      } else {
            res.render("campgrounds/index", {campgrounds: allcampgrounds});
      }
   });
});

//CREATE - add new campground to DB
router.post("/", middleware.isLoggedIn, function(req, res){
    //get data from new.ejs form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var price = req.body.price;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newCampground = {name: name, image: image, price:price, description: desc, author:author};
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
       if(err){
           console.log(err);
       } else {
           //redirect back to campgrounds page
           res.redirect("/campgrounds");
       }
    });
});

//NEW - show form to create campground
router.get("/new", middleware.isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

// SHOW - shows more info about one campground
router.get("/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err || !foundCampground){
            req.flash("error", "Campground not found");
            res.redirect("back");
            console.log(err);
        } else {
            console.log(foundCampground);
              //render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// EDIT Campground Route
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res) {
     Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});

// UPDATE Campground Route
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
   // find and update correct campground
   Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
       if(err){
           res.redirect("/camgrounds");
       } else {
           res.redirect("/campgrounds/" + req.params.id);
       }
   });
});

// DESTROY campground route
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;