const User = require("../models/User");
const jwt = require('jsonwebtoken')

exports.signup = async(req,res) =>{
    console.log(req.body);
    try {
        const user = await User.findOne({email: req.body.email})
        if(user) {
            return res.status(400).json({message: "User already available!!!"})
        }

        const newUser = await User.create(req.body)
        if(!newUser) {
            return res.status(400).json({message: "User creation error!!!"})
        }
        return res.status(200).json({user: newUser, message: "User added successfully!!!"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"})
    }
}

exports.login = async(req,res) =>{
    try {
        const user = await User.findOne({email: req.body.email})
        if(!user) {
            return res.status(400).json({message: "Invalid email Id"})
        }

        if(req.body.password !== user.password){
            return res.status(400).json({message: "Invalid password Id"})
        }

        const {_id, email} = user
        var jwtToken = jwt.sign({_id, email}, req.app.get('secretKey'), {expiresIn:1200})

        return res.status(200).json({jwtToken:jwtToken ,message: "SignIn Sucessfully..."})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"})
    }
}


