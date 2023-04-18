const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Auth = require('./models/auth');
const Recregistration = require('./models/recregistration');

const app = express();
app.use(express.json());
app.use(cors());
const DB = 'mongodb+srv://applicationbackend:carontree@jobportalapi.2mlp1ez.mongodb.net/jobportaldb?retryWrites=true&w=majority';

const db='mongodb+srv://vaibhavdhaygude70:9766782373@cluster0.mpploro.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(()=> {
    console.log("Connected to online db")
}).catch(console.error); 




app.get('/auth', async(req, res) => {
    res.json("yo");
    // const data = await Auth.find();
    // res.json(data);
})

app.post('/auth/register', (req, res) => {
    const newUser = new Auth({
        username: req.body.username,
        password: req.body.password,
        name : req.body.name
    });
    newUser.save();
    res.json(newUser);
})

app.post('/auth/recregister', (req, res) => {
    const newRecruter = new Recregistration({
        username: req.body.username,
        password: req.body.password,
        name : req.body.name,
        companyname : req.body.companyname,
        roll : req.body.roll

    });
    newRecruter.save();
    res.json(newRecruter);
})

app.listen(3001, ()=> {
    console.log("Server started on port 3001");
})

