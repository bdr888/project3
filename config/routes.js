console.log("routes.js hello world");

var express = require('express');
var router = express.Router();

var boardsController = require('../controllers/boardsController.js');

router.route('/', boardsController)
	.get(boardsController.index);

module.exports = router;