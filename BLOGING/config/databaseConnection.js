let mongoose = require("mongoose");
let DataBaseConnection = async () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Blog")
    .then(() => {
      console.log("database connection successful");
    })
    .catch(() => {
      console.log("database is not connection");
    });
};
module.exports = DataBaseConnection;
