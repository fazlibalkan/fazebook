const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Hey it is our user route!");
});

module.exports = router;