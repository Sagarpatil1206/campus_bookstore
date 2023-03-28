import PostModel from "../model/post.js";
import mongoose from "mongoose";

export const getPosts = async(req,res) => {
  try{
    const posts = await PostModel.find();
    res.status(200).json(posts);
  }catch(error){
    res.status(404).json(error);
  }
}

export const getPost = async(req,res) => {
  const {id} = req.params; //getting a id from parameter of request url
  try{
    const post = await PostModel.findById(id); //finding the post of id in the url using model created using mongoose from database  
    res.status(200).json(post); //sending the response as a json post
  }catch(error){
    res.status(404).json({message:error});//page/resource not found
  }
}

export const createPost = async(req,res) => {
    const post = req.body;
    const newPost = new PostModel({...post,creator:req.userId});
    // const newPost = new PostModel(post);
    try{
      await newPost.save();
    }catch(error){
      res.status(409).json(error);
  }
}

export const updatePost = async(req,res) => {
  const postId = req.params.id;
  const {userId} = req.body;
  try {
    const post = await PostModel.findById(postId);
    //remaining code
  } catch (error) {
    console.log(error);
  }
}

export const deletePost = async(req,res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  
    await PostModel.findByIdAndRemove(id); //removind the post with a given id
  
    res.json({ message: "Post deleted successfully." });
}