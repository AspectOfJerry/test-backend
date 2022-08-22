var express = require('express');
var router = express.Router();

// ping
router.get('/', function (req, res, next) {
    res.send('pong!');
});

module.exports = router;
