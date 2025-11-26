const USER = require('../models/userSchema');
// const validToken = require('../Middlewares/tokenVerify');


const getProfile = async(req , res) =>{
    const email = req.body ;
    try{
        const user = await USER.findOne(email)
        // console.log(user);
        const data = {
            name:user.name,
            email:user.email
        }
        res.status(200).json({message:"Profile data of the user" , profile:data});

    }catch(error){
        res.json({message:"Internal server error" , err:error.message})
    }
}

//module exporting

module.exports = getProfile ;
