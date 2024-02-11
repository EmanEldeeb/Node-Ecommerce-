const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");
app.set(express.static(path.join(__dirname, "public")));

app.listen(7000, () => {
  console.log("listening");
});
