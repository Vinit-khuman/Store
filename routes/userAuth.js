const express = require('express');
const { renderSignUp, registerUser, renderLogin, validateLogin } = require('../Controller/userAuthController');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded());

router.get('/sign-up',renderSignUp);

router.post('/sign-up',registerUser);

router.get('/login',renderLogin)

router.post('/login',validateLogin)

module.exports = router;