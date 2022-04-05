import { GET_ALL_POSTS, CREATE_SINGLE_POST } from "./Posts.action";

export const getInitialState = () => ({
  posts: []
});

const PostsReducer = (state = getInitialState(), action) => {

  switch (action.type) {
    case GET_ALL_POSTS:
      const { posts } = action;

      return {
        ...state,
        posts
      };

    case CREATE_SINGLE_POST:
      const { post } = action;

      console.log(post)
      return { ...state, posts: [ ...state.posts, post] }

    default:
      return state;
  }
}

export default PostsReducer;