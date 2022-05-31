
// get Single User
const getSingleUser = async (req,res) => {
    try {
        res.status(200).json('we are getting single user')
    } catch (err) {
        console.log(err)
    }
}
// update User
const updateUser = async (req, res) => {
    try {
        re.status(200).json('we are updating user')
    } catch (err) {
        console.log(err)
    }
}
// delete USER

const deletingUser = async (req, res) => {
    try {
        re.status(200).json('we are deleting user')
    } catch (err) {
        console.log(err)
    }
}


module.exports = { getSingleUser, updateUser, deleteUser }