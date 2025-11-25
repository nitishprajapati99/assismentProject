const USER = require('../models/userSchema');
const bcrypt = require('bcrypt');

const Register = async(req ,  res)=>{
    const {name , email , password} = req.body ;
    try{
     const userExist = await  USER.findOne({email});
     if(userExist){
        res.status(404).json({message:"User is already exists"});
     }
     const salt = 7 ;
     const hashPassword = await bcrypt.hash(password , salt);
    //  console.log(hashPassword);
     await USER.create({email:email , name:name , password:hashPassword});
     res.status(201).json({message:"user is created successfully"});

    }catch(err){
        res.status(500).json({message:"Internal Server Error" , error:err.message})
    }
} 

//module exporting 
module.exports = Register ;