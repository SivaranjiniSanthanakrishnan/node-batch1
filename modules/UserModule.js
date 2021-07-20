const User = require('../models/User');

exports.getData = async (req,res,next) => {
    var response = await User.find();
    res.json(response);
}

exports.saveData = async (req,res,next) => {
    const user = new User({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        password: req.body.password
    })
    var response = await user.save();
    res.send(response);
}

const updateData = async (req,res,next) => {
    const id = req.params.id;
    console.log(id)
    var response = await User.findByIdAndUpdate(id,{
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        password: req.body.password
    })
    console.log(response)
    res.send(response);
}

const deleteData = async (req,res,next) => {
    const id = req.params.id;
    var response =  awaitUser.findByIdAndDelete(id);
    res.send(response);
}

exports.updateData = updateData;
exports.deleteData = deleteData;