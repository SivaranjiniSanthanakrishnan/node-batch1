const User = require('../models/User');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/userdb', {useNewUrlParser: true, useUnifiedTopology: true})
const db=mongoose.connection;
mongoose.set('useFindAndModify', false);

exports.getData = (req,res,next) => {

}

exports.saveData = async (req,res,next) => {
    const user = new User({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
    })
    var response = await user.save();
    res.send(response);
}