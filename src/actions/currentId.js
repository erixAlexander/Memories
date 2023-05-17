export const setId = (id) => async (dispatch) => {
  try {
    dispatch({ type: "SET", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const unSetId = () => async (dispatch) => {
  try {
    dispatch({ type: "UNSET" });
  } catch (error) {
    console.log(error);
  }
};
