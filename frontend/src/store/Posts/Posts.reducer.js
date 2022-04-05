export const getInitialState = () => ({
  test: 'blah blah'
});

const PostsReducer = (state = getInitialState(), action) => {

  switch (action.type) {
    case 'FETCH_ALL':
      return {
        ...state
      };
    default:
      return state;
  }
}

export default PostsReducer;