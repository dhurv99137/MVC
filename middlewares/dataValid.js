
const isValid = (req, res, next) => {
try {
        let { username, email, password, number } = req.body
        console.log(req.body);
        if (!username || !email || !password || !number) {
            res.status(400).send("enter valid data")
        }
        else {
            next()
        }
} catch (error) {
    res.status(500).send("Error middlewares");
}
}


module.exports = isValid