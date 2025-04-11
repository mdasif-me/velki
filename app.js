const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
// routes import
const upload = require("./routes/upload.route");
const userRoute = require("./routes/user.route");
const identityRoutes = require("./routes/identity.route");
const userIDRoutes = require("./routes/userID.route");
const postComment = require("./routes/postComment.route");
const addComment = require("./routes/addComment.route");
const lottery = require("./routes/lottery.route");

// middleware
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.static("img"));
// routes
app.use("/api/v1/upload", upload);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/identity", identityRoutes);
app.use("/api/v1/user-id", userIDRoutes);
app.use("/api/v1/post-comment", postComment);
app.use("/api/v1/add-comment", addComment);
app.use("/api/v1/lottery", lottery);
// route hit
app.get("/", (req, res, next) => {
  res.send(
    `<h1 style="color:#242B2E;font-size:62px; text-align:center;margin-top:200px">"Database routing successfully"</h1>`
  );
});

module.exports = app;
