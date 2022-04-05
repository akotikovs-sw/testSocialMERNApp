export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const CREATE_SINGLE_POST = "CREATE_SINGLE_POST";

export const getPosts = (posts) => ({
  type: GET_ALL_POSTS,
  posts
});

export const createSinglePost = (post) => ({
  type: CREATE_SINGLE_POST,
  post
});
