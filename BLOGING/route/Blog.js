let express=require("express")
Route=express.Router()


// all controller function import
dummyLike=require("../controller/Like")
comment=require("../controller/commentControl")

// http request create
Route.get("/dummy",dummyLike);
Route.post("/comments/create",comment)









module.exports=Route;