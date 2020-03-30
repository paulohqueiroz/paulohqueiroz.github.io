const User = require("../models/user")

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) =>{
        if(err || !user) {
            return res.exports(400).json({
                error: "User Not found"
            })
        }
        
        req.profile = user;

        next();

    })
}