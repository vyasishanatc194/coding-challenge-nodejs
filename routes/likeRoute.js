var express = require('express');
var router = express.Router();
var likeService = require('../services/likeService');


router.post('/',[
    likeService.create
]);

router.get('/',[
    likeService.getLikes
]);

module.exports = router;