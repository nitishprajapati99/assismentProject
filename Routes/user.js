const express = require('express');

const Router = express.Router();

//Register controller
const Register = require('../Controllers/register'); 
Router.post('/auth/register',Register);
//Login controller
const Login  = require('../Controllers/Login');
Router.post('/auth/login' ,Login);
//module exporting
module.exports = Router ;