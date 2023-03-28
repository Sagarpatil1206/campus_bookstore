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
      {post.year +
        " " +
        post.branch +
        " " +
        post.semester.toUpperCase() +
        " SEM "}
    </div>
  );
};

export default PostDetails;
