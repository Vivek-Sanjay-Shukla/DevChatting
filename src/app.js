const express = require('express');

const app = express();

// This is request handler
app.use("/test",(req, res) => {
    res.send("Hello from the server!");
})

app.use("/hello",(req, res) => {
    res.send("Hello from the hello1!");
})

app.listen(7777, () => {
    console.log("Server is running on port 7777");
});


