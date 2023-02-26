import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const getposts = () => axios.get(url);
export const createPost = (post)=> axios.post(url,post);
