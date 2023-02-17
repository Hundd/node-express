const express = require("express");
const app = express();
const http = require('http');

app.get("/", (req, res) => {
  console.log("hello..");
  res.send("Hello World!");
});

app.get("/health-check", (req, res) => {
  console.log("/health-check");
  res.json({ message: "Server up and running" });
});

const httpServer = http.createServer(app);
httpServer.listen(process.env.port, () => {
  console.log(`API is now live on ${process.env.port}`);
});
