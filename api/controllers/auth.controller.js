import User from "../models/user.model.js";
import bcrypt from 'bcrypt';


export const auth = async (req, res, next) => 
    {
        const {username, email, password} = req.body;
        const hashedPassword = bcrypt(password, process.env.SALT);
        const newUser = User({username, email, password: hashedPassword});
        try{
            await newUser.save();
            res.status(201).json({message: "User created sucessfully"});
        } catch(error){
            next(error);
        }
        
    };