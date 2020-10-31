var express = require('express');
var router = express.Router();
                
var likeRoute = require('./likeRoute');
                
router.use('/like',likeRoute);
                
module.exports = router;