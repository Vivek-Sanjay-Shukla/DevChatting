const express = require('express');

const app = express();

// This is request handler
app.use("/user",(req, res) => {
    res.send("Hello Vivek");
});

// this will match to only get HTTP method API calls to /user
app.get("/user",(req,res) => {
    res.send({
        name: "Vivek",
        age: 22
    });
});

app.post("/user",(req,res) => {
    res.send("Data saved successfully");
});

app.delete("/user",(req,res) => {
    res.send("Data deleted successfully");
});

// this will match to all the HTTP method API calls to /test
app.use("/test",(req, res) => {
    res.send("Hello from the server!");
});

app.use("/hello",(req, res) => {
    res.send("Hello from the hello1!");
});


app.listen(7777, () => {
    console.log("Server is running on port 7777");
});


