const mongoose = require("mongoose");

const mongodbURL =
  "mongodb+srv://abcenterprise:abc1234@cluster0.tprp8zr.mongodb.net/abcdatabase?retryWrites=true&w=majority"

mongoose.connect(mongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set('strictQuery', true);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongodb Connected");
});

//Username => abcenterprise
//password => abc1234