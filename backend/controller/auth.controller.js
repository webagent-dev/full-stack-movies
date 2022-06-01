    const user = require('../model/user.model')
// register new user
const registerUser = async (req,res) => {
    try {
        const newUser = await user.create(req.body)
        res.status(201).json(newUser)
    } catch (err) {
        res.status(500).json(err)
    }
}

//  login user
const loginUser = async (req, res) => {
    try {
        const User = await user.findOne({ email: req.body.email })
        !User && res.status(401).json('wrong email and password')
        const passcode = await User.getDecode(req.body.password)
        !passcode && res.status(401).json('wrong email and password')

        const { passwords, ...other } = User._doc
        res.status(200).json(...other)
    } catch (err) {
        console.log(err)
    }
}

module.exports = { registerUser, loginUser}