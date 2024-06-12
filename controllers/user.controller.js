const User = require("../Routes/user.route")

const get = (req, res) => {
    res.send("welcome to Page")
}

const getUsers = async (req, res) => {
    try {
        let data = await User.find()
        res.send(data)
    } catch (error) {
        res.status(500).send("Error retrieving users");
    }
}

const createUser = async (req, res) => {
    try {
        let { email } = req.body;
        let user = await User.findOne({ email: email })
        if (user) {
            res.send({ msg: "User already exists", user })
        }
        else {
            if (req.file) {
                req.body.img = req.file.path
            }
            let data = await User.create(req.body)
            res.body(data)
        }
    } catch (error) {
        res.status(500).send("Error creating user");
    }
}

const updateUser = async (req, res) => {
    try {
        let { id } = req.params
        let data = await User.findByIdAndUpdate(id, req.body)
        res.send(data)
    } catch (error) {
        res.status(500).send("Error updating user");
    }
}

const deleteUser = async (req, res) => {
    try {
        let { id } = req.params
        let data = await User.findByIdAndDelete(id, req.body)
        res.send(data)
    } catch (error) {
        res.status(500).send("Error deleting user");
    }
}



const singupPage = (req, res) => {
    res.render("signup")
}
const loginPsge = (req, res) => {
    res.render("login")
}

const Login = async (req, res) => {
    try {
        let { email, password } = req.body
        let user = await User.findOne({ email: email })
        if (user) {
            if (user.password !== password) {
                res.send("wrong password")
            }
            else {
                res.send("success logged")
            }
        }
        else {
            res.status(404).send("user not found")
        }
    } catch (error) {
        res.status(500).send("Error logging in");
    }
}


module.exports = { get, getUsers, createUser, updateUser, deleteUser, singupPage, loginPsge, Login }