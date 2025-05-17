const jwt = require('jsonwebtoken');
const secretKey = "yourSecretKey";

module.exports = (req,res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if(!token) return res.status(401).send("Access denied");

    try{
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
            next();
    }catch(err){
        res.status(400).send("Invalid token");
    }
};