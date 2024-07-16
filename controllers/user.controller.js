import pkg from 'bcryptjs';        
const { compare } = pkg;
import { User } from "../models/user.js";
import { cookieOptions, sendToken } from "../utils/features.js";

const createUser = async(req, res) =>{
    try {
       const { name, email, password} = req.body;
      const user = await User.create({ name, email, password});
      
      sendToken(res, user, 201, "User created");
    } catch (error) {
       console.log(error);
    }
}

const login = async ( req, res, next) => {
   const {name, password} = req.body;

   const user = await User.findOne({name});
   if(!user) return next(res.status(404).json({
      message: "No user found"
   }))

   const isMatch = await compare(password, user.password);
   if(!isMatch) return next(res.status(404).json({
      message: "Invalid password"
   }))

   sendToken(res, user, 200, `Welcome Back ${user.name}`)
}

const logout = async(req, res) =>{
   try{
      return res.status(200)
      .cookie("payment-token", "", {...cookieOptions, maxAge:0})
      .json({
         success: true,
         message: " Logged Out Successfully "
      })
   }catch(error){

   }
}


export { createUser, login, logout };