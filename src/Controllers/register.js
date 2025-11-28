const USER = require('../models/userSchema');
const bcrypt = require('bcrypt');

const Register = async(req ,  res , next)=>{
    const {name , email , password} = req.body ;
    
     const userExist = await  USER.findOne({email});
     if(userExist){
        return next({
        status:404,
        message:"user is already registered"
        });
     }
     const salt = 7 ;
     const hashPassword = await bcrypt.hash(password , salt);
    //  console.log(hashPassword);
     await USER.create({email:email , name:name , password:hashPassword});
     res.status(201).json({message:"user is created successfully"});

    
} 

//module exporting 
module.exports = Register ;