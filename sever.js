const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const MeuMiddlewere = require("./src/middleweres/middlewere");
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.resolve(__dirname, "public")));
app.use(MeuMiddlewere);
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");
app.use(routes);
app.listen(3000, () => console.log("http://localhost:3000/"));
