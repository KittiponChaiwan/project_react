const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("สวัสดี");
});

app.listen(9753, () => {
    console.log("มาแล้ว http://localhost:9753");
});
