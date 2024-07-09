let Todo=require("../models/Todo")

UdateData= async (req,res)=>{
    let id=req.params.id;
    try {
        const{title,description}=req.body
        const todo=await Todo.findOneAndUpdate({_id:id},{title,description,updatedAt:Date.now()})
        res.status(200).json({
            success:true,
            date:todo,
            message:`Update Successfuly`
        })
       
      
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error.message,
            message:"server error"
        })
     
        
    }
}

module.exports=UdateData
