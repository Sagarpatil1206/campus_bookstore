import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../../actions/postActions";

const PostDetails = () => {
  const { post } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);
  return (
    <div>
      Post Details
      {post?.year +
        " " +
        post?.branch +
        " " +
        post?.semester.toUpperCase() +
        " SEM "}
    </div>
  );
};

/*
college: String,
  year : String,
  branch : String,
  semester : String,
  original_price:String,
  resale_price:String,
  // contact_number : String,
  books_stack:String,
  book1 : String,
  book2 : String,
  book3 : String,
  book4 : String,
  book5 : String,
  book1_pub:String,
  book2_pub:String,
  book3_pub:String,
  book4_pub:String,
  book5_pub:String,
  book1_img : String,
  book2_img : String,
  book3_img : String,
  book4_img : String,
  book5_img : String,
  creator : String,
*/

export default PostDetails;
