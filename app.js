const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT;

app.listen(port, function () {
  console.log("app started ", port);
});

const dir = path.join(__dirname, "public");
console.log(dir);

app.use(express.static(dir));

app.get("/", function (req, res) {
  console.log("my input", req.query);

  const htmlPath = path.join(__dirname, "index.html");
  console.log("html path", htmlPath);

  res.sendFile(htmlPath);
});
