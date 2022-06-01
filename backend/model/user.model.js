const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    photoUrl: { type: String, default: '' },
    isAdmin: {type: Boolean, default: false}
})


UserSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})
UserSchema.methods.getDecode = async function (pass) {
    const isMatch = await bcrypt.compare(pass, this.password)
    return isMatch
}
const user = mongoose.model('User', UserSchema)

module.exports = user