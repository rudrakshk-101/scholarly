const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 4500;
const secret = 'abcdefgh';


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://jatinsahijwanidev:Jatin1234@cluster0.iu2oqjw.mongodb.net/?retryWrites=true&w=majority');

const userSchema = new mongoose.Schema({
    username: {type: String},
    gmail: {type: String},
    password: {type: String}
});

const User = mongoose.model('User',userSchema);

app.post('/register',async(req,res) => {
    const username = req.body.username;
    const gmail = req.body.gmail;
    const password = req.body.password;
    let existingUser = await User.findOne({username});
    if(existingUser) 
    {
        return res.json({
            message: "Username already exists"
        });
    }
    existingUser = await User.findOne({gmail});
    if(existingUser) 
    {
        return res.json({
            message: "gmail already exists"
        });
    }
    const json = {username,gmail,password};
    const newUser = new User(json);
    await newUser.save();
    const token = jwt.sign(json,secret);
    return res.json({
        message: "Registration successful",
        token: token
    });
});

app.post('/login',async(req,res)=> {
    const username = req.body.username;
    const password = req.body.password;
    let existingUser = await User.findOne({username});
    if(!existingUser) return res.json({
        message: "User not found"
    })
    if(password !== existingUser.password)
    {
        return res.json({message: "Password incorrect"});
    }
    let json = {
        username: username,
        password: password,
        gmail: existingUser.gmail
    }
    const token = jwt.sign(json,secret);
    return res.json({
        message: "Registration successful",
        token: token
    });
})





app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})