import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Paper, Typography } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Bookmark from '@mui/icons-material/Bookmark';
import Divider from '@mui/material/Divider';
import "./Post.css";
import { fontWeight } from '@mui/system';

// import ToggleButton from '@material-ui/lab/ToggleButton';

// const semest = ({ post }) => {
//   let semester;
//   if (post.year === "FE") {
//     if (post.sem === "even") {
//       semester = "2";
//     } else {
//       semester = "1";
//     }
//   } else if (post.year === "SE") {
//     if (post.sem === "even") {
//       semester = "4";
//     } else {
//       semester = "3";
//     }
//   } else if (post.year === "TE") {
//     if (post.sem === "even") {
//       semester = "6";
//     } else {
//       semester = "5";
//     }
//   } else if (post.year === "BE") {
//     if (post.sem === "even") {
//       semester = "8";
//     } else {
//       semester = "7";
//     }
//   }
//   console.log("semester: " + semester);
// }

// let semester = semest();

// function toggleSave() {

// const toggle = () => {
//   setState(!state);
// }
// return {
//  < div className = "toggleSave" >
//   <button onClick={toggle} >{state ? <BookmarkBorderIcon /> : <BookmarkBorderIcon />} </button>
//  </div >

// }
// }
const Post = ({ post }) => {
  const [isSaved, setIsSaved] = useState(false);
  console.log(post);
  return (

    // <Paper elevation={2} sx={{borderRadius:1,p:1.5}}>
    <Card sx={{ maxWidth: 345, padding: 3, backgroundColor: '#FFE996', borderRadius: 5 }}>

      <CardMedia
        component="img"
        alt="BookSet Image"
        height="300"
        width="auto"
        image={post.books_stack} sx={{ borderRadius: 5 }}
      />
      <IconButton onClick={() => { setIsSaved(!isSaved) }} sx={{ marginLeft: 34 }} >{
        isSaved ? <Bookmark sx={{ fontSize: 35 }} /> :
          <BookmarkBorderIcon sx={{ fontSize: 35 }} />
      }
      </IconButton>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Merriweather', fontWeight: 'bold' }}>
          {post.year + " " + post.branch + " " + post.semester.toUpperCase() + " SEM "}
        </Typography>
        <Typography variant="body2" color="black" sx={{ fontFamily: 'Merriweather', fontWeight: 'bold' }}>
          Subjects: OS, OOP, DSA, DBMS, CN
        </Typography>
      </CardContent>
      <Divider />
      <CardContent sx={{ textAlign: 'left', fontWeight: 'bold' }}>
        <Typography sx={{ fontFamily: 'Merriweather', fontWeight: 'bold' }}>Price: ₹800 <Button variant='contained' sx={{ backgroundColor: '#F9C810', color: 'black', marginLeft: 7, fontWeight: 'bold' }}>View Details</Button></Typography>


      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card >
    // </Paper>
  );
};

export default Post;

// fontFamily: 'Merriweather'
// text.secondary
