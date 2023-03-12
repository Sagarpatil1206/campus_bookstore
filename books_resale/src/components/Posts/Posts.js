import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import './Posts.css'

const Posts = () => {
  const posts = useSelector((state)=>state.posts);
  console.log("In post section");
  console.log(posts);
  return (
    <div className='postsPage'>
      <Grid container spacing={3} marginTop='10px'>
        {posts.map((post)=>(
          <Grid item sm={4} key={post._id} >
            <Post post={post}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Posts;