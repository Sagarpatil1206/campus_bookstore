import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import Bookmark from "@mui/icons-material/Bookmark";
import Divider from "@mui/material/Divider";
import "./Post.css";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/postActions";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openPost = () => navigate(`/books/${post._id}`);
  return (
    // <Paper elevation={2} sx={{borderRadius:1,p:1.5}}>
    <Card elevation={4}
      sx={{
        maxWidth: 345,
        padding: 3,
        backgroundColor: "#FFE996",
        borderRadius: 5,
        ':hover': {
          boxShadow: 12, // theme.shadows[20]
        },
      }}
    >
      <CardMedia
        component="img"
        alt="BookSet Image"
        height="300"
        width="auto"
        image={post.books_stack}
        sx={{ borderRadius: 5 }}
      />
      {/* <IconButton
        onClick={() => {
          setIsSaved(!isSaved);
        }}
        sx={{ marginLeft: 34 }}
      >
        {isSaved ? (
          <Bookmark sx={{ fontSize: 35 }} />
        ) : (
          <BookmarkBorderIcon sx={{ fontSize: 35 }} />
        )}
      </IconButton> */}
      <CardContent>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontFamily: "Merriweather", fontWeight: "bold" }}
        >
          {post.year +
            " " +
            post.branch +
            " " +
            post.semester.toUpperCase() +
            " SEM "}
        </Typography>
        <IconButton
        onClick={() => {
          setIsSaved(!isSaved);
        }}
        sx={{ pt:0 }}
      >
        {isSaved ? (
          <Bookmark sx={{ fontSize: '35px' }} />
        ) : (
          <BookmarkBorderIcon sx={{ fontSize: '35px' }} />
        )}
      </IconButton>
      </div>
        <Typography
          variant="body2"
          color="black"
          sx={{ fontFamily: "Merriweather", fontWeight: "bold" }}
        >
          <p style={{marginBottom:'4px'}}>Subjects:</p> {post.book1},{post.book2},{post.book3},{post.book4},
          {post.book5}
        </Typography>
      </CardContent>
      <Divider />
      <CardContent sx={{ textAlign: "left", fontWeight: "bold" }}>
        <Typography sx={{ fontFamily: "Merriweather", fontWeight: "bold" }}>
          Price: {post.resale_price}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#F9C810",
              color: "black",
              marginLeft: 7,
              fontWeight: "bold",
              ':hover': {
                backgroundColor:'#F9C810' // theme.shadows[20]
              },
            }}
            onClick={openPost}
          >
            View Details
          </Button>
          {/* uncomment below code for delete button */}
          {/* <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
            // disabled={!flag}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button> */}

        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    // </Paper>
  );
};

export default Post;

// fontFamily: 'Merriweather'
// text.secondary
