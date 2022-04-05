import axios from 'axios';

// Backend url
const url = 'http://localhost:5000/posts';

// Get all posts
export const fetchPosts = () => axios.get(url);

// Create post
export const  createPost = (newPost) => axios.post(url, newPost);