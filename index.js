// // console.log("hye");
// let express = require("express");
// let app = express();
// // app.use(express.urlencoded({ extended: true }));//post method ke body ke data find ke liye
// const bodyParser=require('body-parser');
// app.use(bodyParser.json());//specifically bol rhe ho json data ko request.body me add karna hai
// app.get("/", (req, res) => {
//   res.send("first server create");

// });

// // // route create using express
// app.get('/home',(req,res)=>{
//     // /home (ish route pr get request chalega)
//     res.send("this is home route")
// })

// // // Write post method using express js
// app.post('/api/car',(req,res)=>{
// //     // /ap/car (ish route pr post request chalega)
//     let {name,brand}=req.body
//     console.log(name);
//     console.log(brand);
//     // res.send("car sucessfuly submite")
//     res.send(`${name} ${brand}`)
// })

// // CONNCET EXPRESS SEREVER TO DATABASE
// let mongoose=require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/mydata').then(()=>{
//     console.log("database easily create");

// }).catch(()=>{
//     console.log("database connection some error");

// })




// app.listen(4000, () => {
//   console.log("sever run easily without any problem");
// });




// ************************************************************************************



// LECTURE -02
let express=require('express')
let app=express();


require("dotenv").config();
const PORT=process.env.PORT || 6000;
// middleware hai ishi ke help se post requet karne par req.body se data find karte hai
app.use(express.json())


// import routes for todo api
const todoRoutes=require('./routes/todos')


// this is a middlewear
app.use('/api/v1',todoRoutes)




// connection to database
const dbconnect=require('./config/database')
dbconnect()


// default route
app.get('/',(req,res)=>{
  res.send("<h1>this is  home page</h1>")
})

app.listen(PORT,()=>{
  console.log("server runing port :",PORT);
})