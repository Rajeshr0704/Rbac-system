const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
exports.register = async (req, res)=>{
    try {
        const {username, email,password, role} = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:'User is already exists'});

        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        console.log('passwprd',hashPassword);
        const newUser = new User({
            username,
            email,
            password:hashPassword,
            role,
        });

        await newUser.save();

        res.status(200).json({message:'User register successfully', newUser});

    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Server error'});
    }
};


exports.login = async (req, res) => {

    try {
       const {email, password} = req.body;
       console.log(req.body);
       const user = await User.findOne({ email });
       console.log(user);
       if(!user){

        return res.status(400).json({message:'invalid credentials'});
    
       } 

       const isMatch = await bcrypt.compare(password,user.password); 
    //    console.log(isMatch);
    //    console.log(password);
    //    console.log(user.password);

    //    if(!isMatch){
    //     return res.status(400).json({message:'invalid credentials'});
    //    }

       const token = jwt.sign(
        { userId: user._id, role:user.role},
        process.env.JWT_SECRET,
        {expiresIn:"12h"}
       );

       res.status(200).json({token, role:user.role});
       console.log("token",token);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'server error'});
    }
};