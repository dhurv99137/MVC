const { Router } = require("express");
const { get, getUsers, createUser, deleteUser, updateUser, singupPage, loginPsge, Login } = require("../controllers/user.controller");
const isValid = require('../middlewares/dataValid');
const multer = require('multer');
const upload = require("../middlewares/uploadimg");


// const storage = multer.diskStorage({
//     destination: "uploads",
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + file.originalname);
//     }
// });

// const upload = multer({
//     storage: storage,
// }).single("profile");

let userRoute = Router();

userRoute.get("/", get);
userRoute.get("/users", getUsers);
userRoute.post("/", isValid,upload.single("profile"), createUser);
userRoute.patch("/:id", updateUser);
userRoute.delete("/:id", deleteUser);
userRoute.get("/signup", singupPage);
userRoute.get("/login", loginPsge);
userRoute.post("/login", Login);

module.exports = userRoute;
