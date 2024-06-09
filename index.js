console.log("hye");
let express = require("express");
let app = express();
app.get("/", (req, res) => {
  res.send("first server create");
});

// route create using express
app.get('/home',(req,res)=>{
    res.send("this is home route")
})

// Write post method using express js
app.post('/api/car',(req,res)=>{
    let {name,brand}=req.body
    console.log(name);
    console.log(brand);
    res.send("car sucessfuly submite")
})
app.listen(4000, () => {
  console.log("sever run easily without any problem");
});

