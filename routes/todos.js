const express =require('express')
const router=express.Router()

// import controller
const {createTodo}=require('../controller/createTodo')
const special=require("../controller/SpecificDataFind")
const getalldata=require("../controller/getTodo")
const update=require("../controller/Update")
const deletedata=require("../controller/delete")



// define API route
router.post("/createTodo",createTodo);
router.get("/gettodo/:id",special)
router.get("/gettodo",getalldata)
router.put("/update/:id",update)
router.delete("/delete/:id",deletedata)

module.exports=router