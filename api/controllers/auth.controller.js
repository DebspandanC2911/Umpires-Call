import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup =async(req,res,next) =>{
    const { username, email, password } = req.body;
    if(!username || !email || !password || username=== '' || username=== ' ' || email === '' || password=== ''){
        next(errorHandler(400,'No fields should be void'));
    }

    const hashedPassword= bcryptjs.hashSync(password,15);

    const newUser= new User({
        username,
        email,
        password:hashedPassword,
    });

    try{
        await newUser.save();
    res.json('Signin success');
    }
    catch(error){
        next(error);
    }
};