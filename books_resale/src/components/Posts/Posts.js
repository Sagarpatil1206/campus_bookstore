import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';

const Posts = () => {
  const posts = useSelector((state)=>state.posts);
  console.log("In post section");
  console.log(posts);
  return (
    <>
      <Grid container spacing={3}>
        {posts.map((post)=>(
          <Grid item sm={4} key={post._id} >
            <Post post={post}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Posts;