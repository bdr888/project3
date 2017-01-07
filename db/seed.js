var DB = require("../models").models;

var sampleUsers = [

	{
	id: "1",
	name: "Buff"
	},

	{
	id: "2",
	name: "Auteur"
	}

];

var sampleBoards = [

	{
	id: "1",
	// note: user id omitted here to see what happens
	//userId: "1"
	title: "Shark Movies",
	description: "Movies about sharks"
	},

	{
	id: "2",
	userId: "1",
	title: "Survival Movies",
	description: "Movies where main character is in a survival situation"
	},

	{
	//note id omitted
	//id:"3",
	userId: "2",
	title: "Water Movies",
	description: "Movies set in or around water"
	}


];

var sampleMovies = [

	{
	imdbID:"111111"
	},

	{
	imdbID:"222222"
	},

	{
	imdbID:"333333"
	},

	{
	imdbID:"444444"
	},

	{
	imdbID:"555555"
	}

];

