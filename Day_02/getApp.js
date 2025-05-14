const express = require('express');
const app = express();
const PORT = 3000;

app.get('/hello', (req, res) => {
    res.set('Content-Type', 'text/HTML');
    res.status(200).send("<h1>Welcome to root URL of server.<h1>")
});

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is successfully running, and app is listening on port ", 3000)
    else
        console.log("Error occured, try again!", error)
});