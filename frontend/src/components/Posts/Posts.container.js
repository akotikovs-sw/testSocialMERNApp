import React, { useEffect } from "react";
import { connect } from 'react-redux';

import PostsComponent from "./Posts.component";
import * as api from '../../api';
import { getPosts } from "../../store/Posts/Posts.action";

export const mapStateToProsp = (state) => ({
  initialPosts: state.PostsReducer.posts
});

export const mapDispatchToProps = (dispatch) => ({
  getAllPosts: posts => dispatch(getPosts(posts))
});

export const PostsContainer = (props) => {
  const { initialPosts, getAllPosts } = props;

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const { data } = await api.fetchPosts();
        getAllPosts(data)
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchAllPosts()
  }, [getAllPosts]);


  console.log(initialPosts)
  return (
    <PostsComponent
      posts={ initialPosts }
    />
  );
}

export default connect(mapStateToProsp, mapDispatchToProps)(PostsContainer);