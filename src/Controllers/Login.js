const USER = require('../models/userSchema');
const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const Login = async(req , res , next) =>{
    const SecretKey = process.env.SECRET_KEY ; 
  const {email , password} = req.body ;
  
    const user = await USER.findOne({email});
    if(!user){
      return next({
        status:404,
        message:"user is not found"
      })
    }
    const validUser = await bcrypt.compare(password , user.password);
    // console.log(validUser);
    if(!validUser){
        return next({
          status:409,
          message:"Invalid credentials "
        })
       }
       const payload = {
        email:user.email 
       }
     const token = Jwt.sign(payload , SecretKey , {expiresIn : "1h"} );
    //  console.log("token: ",token);
     res.status(200).json({message:"User loggedIn Successfully", token:token});

    
   
    
  
}

//moduling exporting
module.exports = Login ;