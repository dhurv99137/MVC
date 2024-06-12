const { Router } = require("express");
const { get, getUsers, createUser, deleteUser, updateUser, singupPage, loginPsge, Login } = require("../controllers/user.controller");
const isValid = require('../middlewares/dataValid')

let userRoute = Router();

userRoute.get("/", get);
userRoute.get("/", getUsers)
userRoute.post("/",isValid, createUser)
userRoute.patch("/:id", updateUser)
userRoute.delete("/:id", deleteUser)


userRoute.get("/signup", singupPage)
userRoute.get("/login", loginPsge)
userRoute.post("/login", Login)

module.exports = userRoute;
