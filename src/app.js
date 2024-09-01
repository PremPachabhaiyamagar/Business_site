const express = require("express");
const app = express();
require("./connection/conn");
const path = require("path");
const hbs = require("hbs");
const UserList = require("./models/user");

const submitContactData = require("./controller/ContactFormController");

const PORT = process.env.PORT || 3000;

// setting the path for corresponding files
const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../templets/views");
const partials_path = path.join(__dirname, "../templets/partials");

// middle ware
app.use(
  "/css",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js"))
);
app.use(
  "/jq",
  express.static(path.join(__dirname, "../node_modules/jquery/dist"))
);
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.set("views", views_path);
hbs.registerPartials(partials_path);
// routing
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/contact", submitContactData);
app.listen(PORT, () => {
  console.log(`Server is running under the port ${PORT}`);
});
