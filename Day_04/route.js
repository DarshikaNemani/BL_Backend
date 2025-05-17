const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./model');
const authMiddleware = require('./middleware');

const router = express.Router();

// create user
router.post('/create', async (req, res) => {
    const { name, age, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).send('User already exists');

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name, age, email, password: hashed });
    await user.save();
    res.status(201).send('User created');
});

// login
router.post('/login', async(req,res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).send("User not found!");

    const match = await bcrypt.compare(password,user.password);
    if(!match) return res.status(400).send("Incorrect password");

    const token = jwt.sign({id:user._id}, "yourSecretKey");
    res.json({token});
})

// view all users
router.get('/', async (req, res) => {
    const users = await User.find().select('-password');
    res.json(users);
});

// view one user
router.get('/:email', async (req, res) => {
    const user = await User.findOne({ email: req.params.email }).select('-password');
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});

// Update user by ID
router.put('/:id', authMiddleware, async (req, res) => {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).send("User not found");
    res.json(updated);
});

// Delete user
router.delete('/:id', authMiddleware, async (req, res) => {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).send("User not found");
    res.send("User deleted");
});

module.exports = router;