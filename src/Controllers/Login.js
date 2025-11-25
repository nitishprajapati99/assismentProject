const USER = require('../models/userSchema');
const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const Login = async(req , res) =>{
    const SecretKey = process.env.SECRET_KEY ; 
  const {email , password} = req.body ;
  try{
    const user = await USER.findOne({email});
    if(!user){
       return res.status(409).json({message:"User is not found"});
    }
    const validUser = bcrypt.compare(password , user.password);
    if(!validUser){
        res.status(409).json({message:"Please Enter correct password"});
       }
       const payload = {
        email:user.email 
       }
     const token = Jwt.sign(payload , SecretKey , {expiresIn : "1h"} );
    //  console.log("token: ",token);
     res.status(200).json({message:"User loggedIn Successfully", token:token});

    
    }
  
  catch(err){
    res.status(500).json({message:"Internal Server Error" , error:err.message});
  }
}

//moduling exporting
module.exports = Login ;