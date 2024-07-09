// import karna hai 
let Todo=require('../models/Todo')

//define route handler
exports.createTodo= async(req,res)=>{
    try{
        // extract title and description 
        const {title,description}=req.body

        // create a new obj and insert in db
        // create ke help se database data store karte hai
        const response=await Todo.create({title,description})
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry Created Successfully"
            }
        )

    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })

    }
}

