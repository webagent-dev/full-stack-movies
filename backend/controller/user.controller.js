const user = require('../model/user.model')
const bcrypt = require('bcrypt')

// get all User
const getUser = async (req, res) => {
        const query = req.query.new
    if (req.user.isAdmin) {
        try {
                const users = query ? await user.find().limit(10) : await user.find()
                res.status(200).json(users)
        } catch (err) {
            res.status(500).json(err)
            }
    } else {
        res.status(403).json("you don't have access")
    }
}
// get Single User
const getSingleUser = async (req,res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const users = await user.findById(req.params.id)
            const { password, ...other } = users._doc
            res.status(200).json(other)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json('you are not allowed to access this profile')
    }
}
// update User
const updateUser = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
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
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
        await user.findByIdAndDelete(req.params.id)
        res.status(200).json('account delete sucessfully')
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json('you can only delete your account')
    }
}
// get user stats
const getUserStat = async (req, res) => {
    if (req.user.isAdmin) {
        const today = new Date()
        const lastYear = today.setFullYear(today.setFullYear() - 1)
        const monthArray = [
            'jan','feb','mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
        ]
        try {
            const userData = await user.aggregate([
                {
            
                    $project: {
                        month: { $month: '$createdAt' }
                    },
                },
                {
                    $group: {
                        _id: "$month",
                        total: { $sum: 1 }
                    }
                }
             ])
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err.message)
    }
    }
}


module.exports = { getUser, getSingleUser, updateUser, deleteUser, getUserStat }