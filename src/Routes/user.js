const express = require('express');

const Router = express.Router();
const [passwordValidation , emailValidation] = require('../Middlewares/registerValidation');
const validator = require('../Middlewares/validator');
//Register controller
const Register = require('../Controllers/register'); 
Router.post('/auth/register',[passwordValidation , emailValidation],validator,Register);
//Login controller
const Login  = require('../Controllers/Login');
Router.post('/auth/login',[passwordValidation , emailValidation],validator ,Login);
//module exporting
module.exports = Router ;