const mongoose = require('mongoose')

const connectToDb = (url) => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log('connected to database sucessfully'))
    .catch((err) => console.log(err) )
}

module.exports = connectToDb