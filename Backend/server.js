const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const mongoose = require("mongoose");
const uri =
  "mongodb+srv://schless09devtools:lA5HORAYVzOq2clQ@cluster0.qpm18gx.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
