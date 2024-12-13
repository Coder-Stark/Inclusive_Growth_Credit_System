const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
require('dotenv').config();

//connect database
const mongoUrl = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET_KEY;
mongoose.connect(mongoUrl).then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
})
require('./models/UserDetail');
const User = mongoose.model("UserInfo");
// const Members = mongoose.model("Members");

//registration
app.post("/register", async(req, res) => {
    // const data = req.body;
    const {name, email, mobile, password, userType} = req.body;

    const oldUser = await User.findOne({email:email});

    if(oldUser){
        return res.send({data: "User already Exists!!!"});
    }

    const encryptPassword = await bcrypt.hash(password, 10);
    try{
        await User.create({
            name: name,
            email: email,
            mobile,                 //same as above
            password: encryptPassword,
            userType
        });
        res.send({status: "ok", data:"User Created"});
    }
    catch(err){
        res.send({status: "error", data: err});
    }
})

//login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const oldUser = await User.findOne({ email: email });
  
    if (!oldUser) {
      return res.status(401).send({ status: "error", message: "User doesn't exist!!!" });
    }
  
    if (await bcrypt.compare(password, oldUser.password)) {
      const token = jwt.sign({ email: oldUser.email }, JWT_SECRET);
      return res.status(200).send({ status: "ok", data: token, userType: oldUser.userType });
    } else {
      return res.status(401).send({ status: "error", message: "Invalid password." });
    }
  });
  

//userData
app.post("/userData", async(req, res) => {
    const {token} = req.body;
    try{
        const user = jwt.verify(token, JWT_SECRET);
        const useremail = user.email;

        User.findOne({email: useremail})
        .then((data)=>{
            return res.send({status: "ok", data: data});
        });
    }catch(err){
        res.send({data: err});
    }
})

//members
require('./models/MemberDetail');
const Member = mongoose.model("MemberInfo");
app.get('/member', (req, res)=>{
    res.send({status:"Started"});
})
app.post("/member", async(req, res) => {
    const {name, fatherHusbandName, martialStatus, gender, dob, email, bloodGroup, fullAddress, villageWard, panchayatNagarParishadName, block, district, state, pincode, country, mobile, qualification, occupation} = req.body;

    const oldMember = await Member.findOne({email:email});
    if(oldMember){
        return res.send({data: "Member already Exists!!!"});
    }
    try{
        await Member.create({
            name: name,
            fatherHusbandName: fatherHusbandName,
            martialStatus: martialStatus,
            gender: gender,
            dob: dob,
            email: email,
            bloodGroup: bloodGroup,
            fullAddress: fullAddress,
            villageWard: villageWard,
            panchayatNagarParishadName: panchayatNagarParishadName,
            block: block,
            district: district,
            state: state,
            pincode: pincode,
            country: country,
            mobile: mobile,
            qualification: qualification,
            occupation: occupation
            });
            res.send({status: "ok", data:"Member Created"});
    }
    catch(err){
        res.send({status: "error", data: err});
    }
})

/*
//forget password
app.post("/forgetpassword", async(req, res) => {
  const {email} = req.body;
  try{
      const oldUser = await User.findOne({email:email});
      if(!oldUser){
          return res.send({status:"User doesn't exist !!!"});
      }
      const secret = JWT_SECRET + oldUser.password;
      const token = jwt.sign({email: oldUser.email, id: oldUser._id}, secret, {expiresIn: '10m'});
      const link = `http://192.168.0.108:5001/resetpassword/${oldUser._id}/${token}`;
      console.log(link);
  }catch(err){
      res.send({status: "error", data: err});
  }
});

app.get('/resetpassword/:id/:token', async(req, res) => {
  const {id,token} = req.params;
  console.warn(req.params);
  res.send('Done');
})
*/

//fetch all user
app.get('/getalluser', async(req, res) => {
    try{
        const data = await User.find();
        res.send({status: "ok", data: data});
    }catch(err){
        res.send({status: "error", data: err});
    }
});

//get data on webbrowser
app.get("/", (req, res) => {
    res.send({status:"Started"});
})
app.listen(5001, () => {
    console.log("Server started on port 5001");
});