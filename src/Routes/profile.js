const express = require('express');
const Router = express.Router();


//profile getter route
const validToken = require('../Middlewares/tokenVerify');
const getProfile = require('../Controllers/profile');
Router.post('/auth/profile',validToken ,getProfile);

//module exporting
module.exports = Router ;
