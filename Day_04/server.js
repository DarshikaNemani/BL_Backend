const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./route');
const PORT = 3000;
const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/myapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
}).then(()=>console.log("MongoDB Connected"))
.catch(err=>console.error("MongoDB error:", err));

app.use('/api/v1/auth', authRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})