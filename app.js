const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")

app.listen(3000, () => {
    console.log("Server  Started")
})

app.use(cookieParser("secretCode"))

app.get("/setcookie", (req, res) => {
    res.cookie("userId", "suraj123", { signed: true });
    res.send("Cookie added")
})

app.get("/getcookie", (req, res) => {
    console.log(req.signedCookies);
    let { userId = "123" } = req.signedCookies
    res.send(`Hi ${userId}`)
})