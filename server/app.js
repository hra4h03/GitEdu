const mongoose = require("mongoose");
const express = require("express");
const app = express();

require("dotenv").config();

mongoose.set("useFindAndModify", false);
mongoose.connect(
  `mongodb+srv://Hrach:hrach2003@gitedu-ntr24.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected");
  }
);

// middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.json());

//routers middleware
const homeRoutes = require("./routes/home");
const courseRoutes = require("./routes/courses");
const adminPanel = require("./routes/admin.router");
app.use("/api/courses", courseRoutes);
app.use("/api/home", homeRoutes);
app.use("/admin", adminPanel);

module.exports = app;
