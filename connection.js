exports.connect = () => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb+srv://sivaranjini:12345Welcome@cluster0.sdfhf.mongodb.net/studentDB', {useNewUrlParser: true, useUnifiedTopology: true})
    mongoose.set('useFindAndModify', false);
}



// mongodb://localhost:27017/userdb