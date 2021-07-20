exports.connect = () => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/userdb', {useNewUrlParser: true, useUnifiedTopology: true})
    mongoose.set('useFindAndModify', false);
}