import axios from "axios";

const posts = "/posts";
const API = axios.create({ baseURL: process.env.REACT_APP_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchPosts = (query) => API.get(posts, query);
export const fetchPostsCount = (query) => API.get(`${posts}/count`, query);
export const createPost = (newPost) => API.post(posts, newPost);
export const updatePost = (id, newPost) => API.put(`${posts}/${id}`, newPost);
export const deletePost = (id) => API.delete(`${posts}/${id}`);
export const likePost = (id) => API.patch(`${posts}/${id}/likePost`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);

export const googleAuth = (token) => API.post("/google-auth", { token });
