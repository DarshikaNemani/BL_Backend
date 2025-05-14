const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.json());
app.post('/a', (req, res)=>{
    const {name} = req.body;
    res.send(`Welcome ${name}`);
});

app.listen(PORT, (error)=>{
    if(!error)
        console.log('App is running and listening on port', PORT);
    else
        console.log('Error, try again!', error);
});