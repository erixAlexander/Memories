import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  mainContainer: {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: " 5px",
  },
  square: {
    width: "20px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 15px",
    borderRadius: "10px",
    margin: "0",
    transition: "0.3s",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "gray",
      color: "white",
    },
  },
  active: {
    backgroundColor: "#3f51b5",
    color: "white",
  },
}));
