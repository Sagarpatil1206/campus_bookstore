import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Paper, Typography} from '@mui/material'

const Post = ({post}) => {
  return (
    // <Paper elevation={2} sx={{borderRadius:1,p:1.5}}>
      <Card sx={{ maxWidth: 345 ,padding:3}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        width="auto"
        image={post.books_stack}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.year + " " + post.semester}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    // </Paper>
  );
};

export default Post;