var User = require('../models/user.model.js');


exports.create = function(req, res) {
    console.log("debug line 4: ", req.body);
    // Create and Save a new Location
    if(!req.body) {
        res.status(400).send({message: "user can not be empty"});
    }
console.log(req.body);
    var user = new User({firstName: req.body.firstName, lastName: req.body.lastName,  imageUrl: req.file.filename,email: req.body.email,phoneNumber:req.body.phoneNumber});

    user.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Location."});
        } else {
            res.send(data);
        }
    });
};