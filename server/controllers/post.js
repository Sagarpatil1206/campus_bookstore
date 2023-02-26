import PostModel from "../model/post.js";
import mongoose from "mongoose";

export const getPosts = async(req,res) => {
  try{
    console.log("hello");
    const posts = await PostModel.find();
    // console.log(posts);
    // console.log(posts.length());
    res.status(200).json(posts);
  }catch(error){
    res.status(404).json(error);
  }
}

export const createPost = async(req,res) => {
    const post = req.body;
    const newPost = new PostModel(post);
    try{
      await newPost.save();
    }catch(error){
      res.status(409).json(error);
  }
}