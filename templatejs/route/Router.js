var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/*url*/", function (req, res, next) {
    res.json({
        //...
    });
});

module.exports = router;