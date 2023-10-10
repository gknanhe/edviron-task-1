//Express server
const express = require("express");
const app = express();
const port = process.env.port || 3000;
const db = require("./config/mongoose");

//using cookie parser
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Router
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
    return;
  }
  console.log(`Server is running on port ${port}`);
});
