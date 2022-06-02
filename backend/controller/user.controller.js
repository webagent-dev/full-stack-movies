const user = require('../model/user.model')
const bcrypt = require('bcrypt')

// get all User
const getUser = async (req, res) => {
    try {
            res.status(200).json('we are getting all user')
    } catch (err) {
        res.status(500).json(err)
    }
}
// get Single User
const getSingleUser = async (req,res) => {
    try {
        res.status(200).json('we are getting single user')
    } catch (err) {
        res.status(500).json(err)
    }
}
// update User
const updateUser = async (req, res) => {
    if (req.user._id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const updateUser = await user.findByIdAndUpdate(req.params.id,
                { $set: req.body },
                { new: true, runValidators: true }
            )
            const { password, ...other } = updateUser._doc
            res.status(200).json(other)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json('you can only update your account')
    }
}
// delete USER

const deleteUser = async (req, res) => {
    try {
        res.status(200).json('we are deleting user')
    } catch (err) {
        res.status(500).json(err)
    }
}


module.exports = { getUser, getSingleUser, updateUser, deleteUser }