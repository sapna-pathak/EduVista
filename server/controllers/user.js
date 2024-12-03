import { User } from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sendMail from "../middlewares/sendMail.js";
export const register=async(req,res)=>{
    try {
        const {email,name,password}=req.body
        let user = await User.findOne({email});
        if(user)
            return res.status(400).json({
        message: "user already exists",});
        const hashpassword = await bcrypt.hash(password,10)
        user = {
            name,
            email,
            password:hashpassword
        }
        const otp=Math.floor(Math.random()*1000000);
        const activationToken=jwt.sign({
            user,
            otp,
        },
        process.env.Activation_Secret,
    {
        expiresIn:"5m",
    });
    const data={
        name,
        otp,
    };
    await sendMail(
        email,
        "EduVista",
        data
    )
    res.status(200).json({
       meassage:"otp has sent to your mail",
       activationToken
    })
    } 
    catch (error) {
        res.status(500).json({
            message:error.message,
        });
        
    }
}