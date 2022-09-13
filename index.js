const mongoose = require("mongoose");
const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
app.use(require("./routes/comment.route"));
app.use(require("./routes/post.route"));
app.use(require("./routes/user.route"));

mongoose.connect(
  "mongodb+srv://Mansur:1954@cluster0.xyb0huh.mongodb.net/Twitter",
  function () {
    console.log("Подключено к монго");
  }
);

app.listen(port, function () {
  console.log("Сервер запущен.");
});
