const mongoose = require("mongoose");

const uri =
  "mongodb+srv://divyagupta:abcd@cluster0.loied.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => {
    console.log("database successfully connected");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose;
