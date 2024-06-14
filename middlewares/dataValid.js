const isValid = (req, res, next) => {
    try {
        let { username, email, password, number } = req.body;
        console.log(req.body);
        if (!username || !email || !password || !number) {
            return res.status(400).send("Enter valid data");
        }
        next();
    } catch (error) {
        res.status(500).send("Error in middleware");
    }
};

module.exports = isValid;
