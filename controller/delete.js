// import karna hai 
let Todo=require('../models/Todo')

//define route handler
deleteData= async(req,res)=>{
    let {id}=req.params
    try{
       await Todo.findByIdAndDelete(id)
       res.json({
        success:true,
        message:"Todo is deleted"
       })

    }
    catch(error){
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Server Error"
        })
        
    }
}

module.exports=deleteData