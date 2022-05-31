// register new user
const registerUser = async (req,res) => {
    try {
       res.status(200).json('we are registering user')
    } catch (err) {
        console.log(err)
    }
}

//  login user
const loginUser = async (req, res) => {
    try {
        res.status(200).json('we are logging user')
    } catch (err) {
        console.log(err)
    }
}

module.exports = { createUser, loginUser}