import * as api from '../api/post'
import {FETCH_ALL,CREATE} from '../actions/actionConstants'

export const getPosts = () => async(dispatch) => {
  try {
    // console.log("hello_actuib");
    const { data } = await api.getposts();
    console.log(data);

    dispatch({type : FETCH_ALL , payload:data});
    console.log("hello",data);
  } catch (error) {
    console.log(error);
  }
}

export const createPost = (post) => async(dispatch) => {
  try {
    const {data} = await api.createPost(post);
    dispatch({type : CREATE , payload:data});
  }catch(error){
    console.log(error);
  }
}