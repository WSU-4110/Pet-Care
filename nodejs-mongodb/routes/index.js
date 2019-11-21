var express   = require('express');
var router    = express.Router();
var mongoose  = require('mongoose');
var User      = mongoose.model('Users');
var crypto    = require('crypto'), hmac, signature;
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize }   = require('express-validator/filter');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Petcare Sign-Up'});
 })