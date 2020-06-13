const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.user = bodyParser.json();

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
