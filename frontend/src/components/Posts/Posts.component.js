import React from "react";

import Post from "../Post/Post.component";

import useStyles from './Posts.styles';

export const PostsComponent = () => {
  const classes = useStyles();

  return (
    <h2>Posts - inside <Post /></h2>
  );
}

export default PostsComponent;
