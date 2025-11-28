
const errorHandler = async(err, req , res , next)=>{
    // console.log(err);
    const status = err.status || 500 ;
    const message = err.message ;
    res.status(status).json({
        success:false,
        error:message
    })
}

//module exporting
module.exports = errorHandler ;