const express = require("express");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
    console.log("App is running...");
    res.json({ status: "Done with the Github Actions" });
});

app.get("/health", (req, res) => {
    console.log("ok");
    res.json({ status: "Health check done using github actions" });
});

app.get("/hello", (req, res) => {
    console.log("Hello Doston");
    console.log(`IP : ${req.headers["x-forwarded-for"] || req.socket.remoteAddress}`);
    res.json({ message: "Hello from server side" });
});

app.listen(PORT, () => {
    console.log(`------- Server running on port ${PORT} ---------`);
});
