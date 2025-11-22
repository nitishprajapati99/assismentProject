const USER = require('../models/userSchema');
const bcrypt = require('bcrypt');

const Register = async(req ,  res)=>{
    const {name , email , password} = req.body ;
    try{
     const userExist = await  USER.findOne({email});
     if(userExist){
        res.json({message:"User is already exists"});
     }
     const salt = 7 ;
     const hashPassword = await bcrypt.hash(password , salt);
     console.log(hashPassword);
     await USER.create({email:email , name:name , password:hashPassword});
     res.json({message:"user is created successfully"});

    }catch(err){
        res.json({message:"Internal Server Error" , error:err.message})
    }
} 

//module exporting 
module.exports = Register ;