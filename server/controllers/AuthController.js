import UserModel from "../model/UserModel.js";
import bcrypt from 'bcrypt';

export const registerUser = async(req,res) => {
  const {email,firstName,lastName,password} = req.body;
  try {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = new UserModel({email,firstName,lastName,password:hashedPassword});

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
}

export const loginUser = async(req,res) => {
  const {email,password} = req.body;
  try {
    const user = await UserModel.findOne({email});
    if(user){
      const isValid = await bcrypt.compare(password,user.password);
      isValid ? res.status(200).json(user) : res.status(400).json({message:'Invalid Credentials'});
      //server cant process due to client error
    }else{
      res.status(500).json({message:'User does not exit'});
    }
  } catch (error) {
    console.log(error);
  }
}