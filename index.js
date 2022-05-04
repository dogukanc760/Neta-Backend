const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const publicPath = path.join(__dirname,  "build");

//Add Routes
const brandRoute = require("./routes/brand.routes");
const campaingRoute = require("./routes/campaing.routes");
const cardRoute = require("./routes/card.routes");
const categoryRoute = require("./routes/category.routes");
const creditsRoute = require("./routes/credits.routes");
const productRoute = require("./routes/product.routes");
const settingsRoute = require("./routes/setting.routes");

//logger
const loggerService = require("./services/logger.services");

//app allow
dotenv.config();
app.use(cors());
app.use(express.json());
app.options("*", cors());

//web site rendering
app.use(express.static(publicPath));

//logger middleware
const myLogger = function (req, res, next) {
  console.log("A request has come request is:");
  console.log(req.body);
  if (req.body) {
    loggerService.add(req.body);
  }
  if (req.params) {
    loggerService.add(req.params);
  }
  next();
};

//Use middleware
app.use(myLogger);

//Use Route
app.use("/api/brand", brandRoute);
app.use("/api/campaing", campaingRoute);
app.use("/api/card", cardRoute);
app.use("/api/category", categoryRoute);
app.use("/api/credits", creditsRoute);
app.use("/api/product", productRoute);
app.use("/api/setting", settingsRoute);

//db connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection successfully"))
  .catch((err) => {
    console.log(err);
  });

//default endpoint
app.get("/", (req, res) => {
  try {
    res.sendFile(path.join(publicPath, "index.html"));
    // res.status(200).json({
    //   message: "Api is working! Say hello",
    //   status: 200,
    //   data: { badverbs: "some data in there bitch" },
    // });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// start listener
app.listen(process.env.PORT || 3000, () => {
  console.log(publicPath);
  console.log("ssserver drunning at " + process.env.PORT);
});
