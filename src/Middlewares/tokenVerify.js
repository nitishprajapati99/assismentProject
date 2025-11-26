const Jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY ;
const validToken = async(req , res , next)=>{
  try{

    const headers = req.headers.authorization ;
    console.log("headers",headers);
    if(!headers || !headers.startsWith('Bearer')){
      res.status(400).json({message:"Admin is unauthorized" , success:false})
    }
    const authtoken = headers.split(' ')[1];
    console.log("authtoken",authtoken);
    const decode = await Jwt.verify(authtoken , SECRET_KEY);
    console.log(decode);
    req.user = decode ;
    // Proceed to next middleware or controller
    next();
  }
  catch(err){
    if(err.name=="TokenExpiredError"){
    return res.status(401).json({ success: false, message: 'Token expired. Please log in again.' })
  }
  if(err.name=="JsonwebTokenError"){
    return res.status(403).json({success:false , message:"Invalid token."})
  }
  return res.status(401).json({message:"acces denied", error:err.message});
  }
}

//module exporting
module.exports = validToken ;
