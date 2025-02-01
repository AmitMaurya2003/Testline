const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 8080;

app.use(cors({
    origin : "http://localhost:5173"
}));

app.get("/", (req, res) => {
    res.send("working well!");
});

app.get("/quiz-data", async (req, res) =>{
    try {
        const response = await fetch("https://api.jsonserve.com/Uw5CrX");
        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({error : "Failed to fetch the quiz-data."});
    };
});

app.listen(port, () => {
    console.log("app is listing to the port 8080");
});