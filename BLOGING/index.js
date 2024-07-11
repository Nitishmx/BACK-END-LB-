let express = require("express");
let app = express();
app.use(express.json());//body se json data lete hai
let DataBaseConnection = require("../BLOGING/config/databaseConnection");
let blog = require("../BLOGING/route/Blog");

// middleware
app.use("/api/v1", blog);

DataBaseConnection();
app.listen(4000, () => {
  console.log("server is runing");
});

app.get("/", (req, res) => {
  res.send(`<h1>This is a home page</h1>`);
});
