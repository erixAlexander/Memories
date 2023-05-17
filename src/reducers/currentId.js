export default (id = null, { type, payload }) => {
  switch (type) {
    case "SET":
      return payload;
    case "UNSET":
      return null;
    default:
      return id;
  }
};
