const express = require("express");
const app = express();
const path = require("path");


app.use(express.static(path.join(__dirname, "client/dist")));

app.listen("4000", () => {
  console.log("listening on port 4000");
})