import { AUTH, LOGOUT } from "../constants/actionTypes";

export default (state = { authData: null }, { type, payload }) => {
  switch (type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify(payload));
      return { authData: payload };
    case LOGOUT:
      localStorage.removeItem("profile");
      return { ...state, authData: null };
    default:
      return state;
  }
};
