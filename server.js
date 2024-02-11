const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
// routers
const adminRouter = require("./Routes/admin");
const shopRouter = require("./Routes/shop");
// genral config
app.use(bodyparser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
// routing
app.use("/admin", adminRouter);
app.use("/", shopRouter);
// end routing
app.listen(7000, () => {
  console.log("listening");
});
