let mongoose=require('mongoose')
require("dotevn").config()//ish statement ke env file ke inner wala total code process.env.databaseurl me load ho jayega
function dataconnection(){
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }) //process.env.DATABASE_URL(.env wala data load ho jayega process ke inner)
    .then(()=>{
        console.log("database connect seprately");
    }).catch(()=>{
        console.log("some errror generate ");
    })
}   

//(process.env.DATABASE_URL)= (this command ke help se .env file wala data database.js me aa gya hai)

module.exports=dataconnection;