const express = require("express");
const app = express();


const path = require("path");

app.use("/static", express.static(path.join(__dirname, "static")));


app.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/index.html");
});

app.get("/about", (req, res) => {
    res.sendFile(process.cwd() + "/about.html");
});

app.get("/connect", (req, res) => {
    res.sendFile(process.cwd() + "/connect.html");
});

app.listen(3002, () => {
    console.log("Server started at port 3002");
});