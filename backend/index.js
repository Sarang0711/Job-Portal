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

mongoose.connect(db,{
    dbName:'users',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(()=> {
    console.log("Connected to online db")
}).catch(console.error); 




app.post('/auth', async(req, res) => {
    console.log("accessed");
    console.log("finding : " + req.body.username + " with password : " +req.body.password);


    Auth.findOne({username : req.body.username})
                .then((userNameExist) => {
                    if(userNameExist){
                        console.log("username exists");
                        Auth.findOne({password : req.body.password})
                            .then((userNameExist) => {
                                if(userNameExist){
                                    console.log("password matches ");
                                    return res.status(200).json({code : 1});
                                }
                                
                            }).catch(err => {console.log(err);});
                    }
                    
                }).catch(err => {console.log(err);});
    
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

    const {username, password, name, companyname, roll, email} = req.body;

    if(!username || !password || !name || !companyname || !roll ||!email ){
        console.log("Please the Enter details");

        return res.status(422).json({error :"Please enter the details"});
    }

    Recregistration.findOne({email: email})
        .then((userExist) => {
            if(userExist){
                return res.status(422).json({error : "Email alredy exist"})
            }

            Recregistration.findOne({username :username})
                .then((userNameExist) => {
                    if(userNameExist){
                        return res.status(422).json({error :"Username taken"});
                    }
                    const newRecruter = new Recregistration({username,password,name,companyname,roll,email});
                    console.log(newRecruter);
                    newRecruter.save();
                    res.json(newRecruter);
                }).catch(err => {console.log(err);});
        }).catch(err => {console.log(err);});





})

app.listen(3001, ()=> {
    console.log("Server started on port 3001");
})

