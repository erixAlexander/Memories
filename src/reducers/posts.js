import {
  CREATE,
  UPDATE,
  FETCH_ALL,
  LIKE,
  DELETE,
} from "../constants/actionTypes";

export default (posts = [], { type, payload }) => {
  switch (type) {
    case FETCH_ALL:
      return payload;
    case CREATE:
      return payload; //[...posts, payload];
    case UPDATE:
    case LIKE:
      return posts.map((post) => (post._id == payload._id ? payload : post));
    case DELETE:
      return payload; //posts.filter((post) => post._id != payload);
    default:
      return posts;
  }
};
