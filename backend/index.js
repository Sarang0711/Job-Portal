const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Auth = require('./models/auth');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/portaldb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log("Connected to db")
}).catch(console.error);

app.get('/auth', async(req, res) => {
    const data = await Auth.find();
    res.json(data);
})

app.post('/auth/register', (req, res) => {
    const newUser = new Auth({
        username: req.body.username,
        password: req.body.password
    });
    newUser.save();
    res.json(newUser);
})

app.listen(3001, ()=> {
    console.log("Server started on port 3000");
})

