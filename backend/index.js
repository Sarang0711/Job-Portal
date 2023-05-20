const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Auth = require('./models/auth');
const Recregistration = require('./models/recregistration');
const Jobs =require('./models/jobs')
const Intership = require('./models/internship')
const app = express();
app.use(express.json());
app.use(cors());
// var router = express.Router();
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
    let userExists = false;
    console.log("finding : " + req.body.username + " with password : " +req.body.password);

    Auth.findOne({username : req.body.username})
                .then((userNameExist) => {
                    if(userNameExist){
                        console.log("username exists");
                        console.log(userNameExist.password);
                        if(userNameExist.password === req.body.password){
                            console.log("password matches ");
                            return res.status(200).json({code : 1,name : userNameExist.name, isRec : 0});
                            
                        }else res.status(401).json({code : 0});
                    } 

                }).catch(err => {console.log(err);});

    Recregistration.findOne({username : req.body.username})
    .then((recruterExists) => {
        if(recruterExists){
            console.log("username exists");
            console.log(recruterExists.password);
            if(recruterExists.password === req.body.password){
                console.log("password matches ");
                return res.status(200).json({code : 1,name : recruterExists.name,isRec : 1});

            }else res.status(401).json({code : 0});
        } 

    }).catch(err => {console.log(err);});
    

});


app.post('/auth/register', (req, res) => {

    const {username, password, name} = req.body;
    if(!username || !password || !name ){
        console.log("Please the Enter details");

        return res.status(422).json({code : 0});
    }

    Auth.findOne({username : username})
    .then((userExist) => {
        if(userExist){
            return res.status(422).json({code: 2, error : "Email alredy exist"})
        }

        const newUser = new Auth({username,password,name});
        console.log(newUser);
        
        newUser.save();
        res.json(newUser);
        
    }).catch(err => {console.log(err);});



})

app.post('/auth/postajob', (req, res) => {
    const {companyname, jobtitle, jobdesc,recruter} = req.body;
    if(!companyname || !jobtitle || !jobdesc ){
        console.log("Please the Enter details");
        return res.status(422).json({code : 0});
    }
    const newJob = new Jobs({companyname, jobtitle, jobdesc,recruter});
    console.log(newJob);
    newJob.save();
    return res.status(422).json({code : 1});
})
app.post('/auth/postaintenship', (req, res) => {
    const {companyname, jobtitle, jobdesc,recruter} = req.body;
    if(!companyname || !jobtitle || !jobdesc ){
        console.log("Please the Enter details");
        return res.status(422).json({code : 0});
    }
    const newJob = new Intership({companyname, jobtitle, jobdesc,recruter});
    console.log(newJob);
    newJob.save();
    return res.status(422).json({code : 1});
})


app.get('/jobs',async(req,res)=>{
    // console.log("Fetching");
    // Jobs.find().then((data)=>{
    //     data=res.json(data)
    // }).then(()=>console.log(data))
    const response = await Jobs.find()
    // console.log('response', response)
    res.send(response)
})

app.get('/newUsersCounts',async(req,res)=>{
    console.log("Fetching");
    const response = await Auth.count();
    console.log('response', response); 
    return res.status(200).json({count : response});

})

app.get('/getJobPostedCounts',async(req,res)=>{
    console.log("Fetching");
    var totalCount = 0;
    var response = await Jobs.find({recruter : 'knob'});
    totalCount += response.length;
    var response = await Intership.find({recruter : 'knob'});
    totalCount += response.length;
    return res.status(200).json({count : totalCount});

})

app.get('/getApplicants',async(req,res)=>{
    const response = await Auth.find()
    res.send(response)
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

