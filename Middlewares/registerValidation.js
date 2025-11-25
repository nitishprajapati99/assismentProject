const {body , validationResult} = require('express-validator');


//email validations
const emailValidation = body("email")
.notEmpty().withMessage('Email is required')
.matches(/^[^\s@]*@[^\s@]+\.[^\s@]+$/)
 .withMessage("Enter a valid email address");

//password validaions
const passwordValidation  = body("password")
.notEmpty().withMessage("Password is required")
.matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)
.withMessage("Password must be at least 6 characters long and contain at least one letter and one number");

//module exporting
module.exports = [passwordValidation , emailValidation];