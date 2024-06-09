console.log("hye");
let express = require("express");
let app = express();
app.use(express.urlencoded({ extended: true }));//post method ke body ke data find ke liye
const bodyParser=require('body-parser');
app.use(bodyParser.json());//specifically parse json data add it to the request.body object
app.get("/", (req, res) => {
  res.send("first server create");
});

// route create using express
app.get('/home',(req,res)=>{
    // /home (ish route pr get request chalega)
    res.send("this is home route")
})

// Write post method using express js
app.post('/api/car',(req,res)=>{
    // /ap/car (ish route pr post request chalega)
    let {name,brand}=req.body
    console.log(name);
    console.log(brand);
    res.send("car sucessfuly submite")
})

// CONNCET EXPRESS SEREVER TO DATABASE
let mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mydata').then(()=>{
    console.log("database easily create");

}).catch(()=>{
    console.log("database connection some error");

})




app.listen(4000, () => {
  console.log("sever run easily without any problem");
});

