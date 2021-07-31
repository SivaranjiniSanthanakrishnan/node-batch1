exports.connect = () => {
    try {
        const mongoose = require('mongoose');
        mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        mongoose.set('useFindAndModify', false);
    } catch(err) {
        console.log(err)
        process.exit()
    }
    
}



// mongodb://localhost:27017/userdb