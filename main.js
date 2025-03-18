const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./db");
const passport = require("./auth");

const bodyParser = require("body-parser");

app.use(bodyParser.json()); // req.body

// const MenuItem = require("./models/menu");

const PORT = process.env.PORT || 3000;

// Middleware Functions
const logRequest = (req, res, next) => {
  console.log(
    `${new Date().toLocaleString()} Request Made to : ${req.originalUrl}`
  );
  next();
};

app.use(logRequest);

app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate("local", { session: false });

app.get("/", (req, res) => {
  res.send("welcome to my hotel");
});

const personRoutes = require("./routes/personroutes");
const menuItemsRoutes = require("./routes/menuItemsRoutes");

app.use("/person", localAuthMiddleware, personRoutes);
app.use("/menu", menuItemsRoutes);




app.listen(PORT, () => {
  console.log("server is listening on port 3000");
});
