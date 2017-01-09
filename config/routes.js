console.log("routes.js hello world");

//// Express ////
var express = require('express');
var router = express.Router();

//// Controllers ////
// var userController = require('../controllers/userController');
var boardController = require('../controllers/boardController.js');
var movieController = require('../controllers/movieController.js');
// var movieBoardController = require('./controllers/movieBoardController.js');


//// User routes ////

//// Board routes ////

// index
router.get('/api/board', boardController.index);

// create
router.post('/api/board', boardController.create);

// show
router.get('/api/board/:id', boardController.show);

// update
router.put('/api/board/:id', boardController.update);

// destroy
router.delete('/api/board/:id', boardController.destroy);


//// Movie routes ////

// index
router.get('/api/movie', movieController.index);

// create
router.post('/api/movie', movieController.create);

// show
router.get('/api/movie/:id', movieController.show);

// update
router.put('/api/movie/:id', movieController.update);

// destroy
router.delete('/api/movie/:id', movieController.destroy);

//// MovieBoard routes ////



//// Export ////
module.exports = router;