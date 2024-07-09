let Todo=require("../models/Todo");
specificeData=async(req,res)=>{
    let id=req.params.id;
    try {
        const particularData=await Todo.findById({_id:id})
        if (!particularData) {
            res.status(404).send({
                success:false,
                message:"No Data Found woth Given Id"
            })
        }
        res.status(200).json({
            success:true,
            data:particularData,
            message:`Todo id ${id} fetch successfully get`
        })
    } catch (error) {
        console.log("some error create")
        res.status(500).json({
            success:false,
            data:"some error create data is not fetch",
            message:"data is not fetch"
        })
        
    }
}

module.exports=specificeData