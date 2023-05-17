import * as api from "../api";
import {
  CREATE,
  UPDATE,
  FETCH_ALL,
  LIKE,
  DELETE,
} from "../constants/actionTypes";

export const getPosts = (currentPage, filter) => async (dispatch) => {
  try {
    const query = {
      params: {
        currentPage,
        filter,
      },
    };
    const { data } = await api.fetchPosts(query);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost =
  (post, currentPage, filter, setIsFiltered) => async (dispatch) => {
    try {
      await api.createPost(post);
      const query = {
        params: {
          currentPage,
          filter,
        },
      };
      const { data } = await api.fetchPosts(query);
      dispatch({ type: CREATE, payload: data });
      setIsFiltered((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost =
  (id, currentPage, filter, setIsFiltered) => async (dispatch) => {
    try {
      await api.deletePost(id);
      const query = {
        params: {
          currentPage,
          filter,
        },
      };
      const { data } = await api.fetchPosts(query);
      dispatch({ type: DELETE, payload: data });
      setIsFiltered((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
