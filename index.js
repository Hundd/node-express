const express = require("express");
const app = express();
const port = 80;

app.get("/", (req, res) => {
  console.log("hello..");
  res.send("Hello World!");
});

app.get("/health-check", (req, res) => {
  console.log("/health-check");
  res.json({ message: "Server up and running" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
