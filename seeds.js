var mongoose    = require("mongoose"),
    Campground  = require("./models/campgrounds"),
    Comment     = require("./models/comment");
var data = [
        {
            name: "Clouds Rest", 
            image: "https://farm3.staticflickr.com/2924/14465824873_026aa469d7.jpg",
            description: "Maecenas tristique vitae odio sed blandit. Suspendisse urna augue, condimentum quis massa sed, pharetra hendrerit purus. Nam imperdiet arcu non tortor cursus ultricies. Donec sagittis, elit sed finibus bibendum, lectus dolor porttitor velit, accumsan rhoncus purus odio eu nunc. Integer tempus augue tellus, sed sodales diam blandit a. Nulla dui sapien, pellentesque et mi ac, cursus ornare leo. Nullam lacinia libero ipsum, a volutpat lectus blandit vel. Donec nec eleifend erat. Vestibulum libero dui, porttitor ac dui in, interdum laoreet orci. Maecenas tempus fringilla cursus."
        },
        {
            name: "Desert Rest", 
            image: "https://farm6.staticflickr.com/5230/5582082401_6d13c961b2.jpg",
            description: "aMaecenas tristique vitae odio sed blandit. Suspendisse urna augue, condimentum quis massa sed, pharetra hendrerit purus. Nam imperdiet arcu non tortor cursus ultricies. Donec sagittis, elit sed finibus bibendum, lectus dolor porttitor velit, accumsan rhoncus purus odio eu nunc. Integer tempus augue tellus, sed sodales diam blandit a. Nulla dui sapien, pellentesque et mi ac, cursus ornare leo. Nullam lacinia libero ipsum, a volutpat lectus blandit vel. Donec nec eleifend erat. Vestibulum libero dui, porttitor ac dui in, interdum laoreet orci. Maecenas tempus fringilla cursus."
        },
        {
            name: "Canyon Floor", 
            image: "https://farm7.staticflickr.com/6025/5920771218_e70cb98fe3.jpg",
            description: "Maecenas tristique vitae odio sed blandit. Suspendisse urna augue, condimentum quis massa sed, pharetra hendrerit purus. Nam imperdiet arcu non tortor cursus ultricies. Donec sagittis, elit sed finibus bibendum, lectus dolor porttitor velit, accumsan rhoncus purus odio eu nunc. Integer tempus augue tellus, sed sodales diam blandit a. Nulla dui sapien, pellentesque et mi ac, cursus ornare leo. Nullam lacinia libero ipsum, a volutpat lectus blandit vel. Donec nec eleifend erat. Vestibulum libero dui, porttitor ac dui in, interdum laoreet orci. Maecenas tempus fringilla cursus."
        }
            
    ]
    
function seedDB(){
    //REMOVE ALL CAMPGROUNDS
        Campground.remove({}, function(err){
        // if (err){
        //     console.log(err);
        // }
        // console.log("removed camgrounds");
        // //ADD A FEW CAMPGROUND
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err);
        //         } else {
        //             console.log("added a campground");
        //             // create a comment
        //             Comment.create(
        //                 {
        //                     text: "this place is great, but I wish there was internet",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                     campground.comments.push(comment);
        //                     campground.save();
        //                     console.log("created new comment");
        //                     }
        //                 }); 
        //         }
        //     });
        // });
    });
}
    
module.exports = seedDB;