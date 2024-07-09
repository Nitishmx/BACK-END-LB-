let Todo=require("../models/Todo")

//define route handler
getTodo= async(req,res)=>{
    try{
    //   fetch all todo from database
    let alltodo=await Todo.find({});
    // console.log(alltodo);
    res.status(200).json({
        success:true,
        data:alltodo,
        message:"Entire todo data fetch"
    })

    }
    catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            error:error.message,
            message:"todo data is not fetch"
        })
       

    }
}
module.exports=getTodo