const mongoose = require('mongoose')

const UserSchema = new mongooose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    photoUrl: { type: String, default: '' },
    isAdmin: {type: Boolean, default: false}
})


const user = mongoose.model('User', UserSchema)

module.exports = user