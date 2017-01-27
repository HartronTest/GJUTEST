'use strict';

var express = require('express');
var router = express.Router();


module.exports = function (passport) {

	

	router.get('/auth/facebook', passport.authenticate('facebook'));

	router.get('/auth/facebook/callback', passport.authenticate('facebook'), function (req ,res) {
		res.send(req.user);
	});

	


	

	router.get('/auth/twitter', passport.authenticate('twitter'));

	router.get('/auth/twitter/callback', passport.authenticate('twitter'), function (req ,res) {
		res.send(req.user);
	});

	


	

	router.get('/auth/github', passport.authenticate('github'));

	router.get('/auth/github/callback', passport.authenticate('github'), function (req ,res) {
		res.send(req.user);
	});

	


	

	router.get('/auth/linkedin', passport.authenticate('linkedin'));

	router.get('/auth/linkedin/callback', passport.authenticate('linkedin'), function (req ,res) {
		res.send(req.user);
	});

	


	

	router.get('/auth/google', passport.authenticate('google'));

	router.get('/auth/google/callback', passport.authenticate('google'), function (req ,res) {
		res.send(req.user);
	});

	


	return router;

};