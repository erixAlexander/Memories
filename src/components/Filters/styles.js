import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  filtersContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    width: "100%",
    height: "290px",
    backgroundColor: "white",
    borderRadius: "4px",
    marginBottom: "40px",
    gap: "20px",
    padding: "20px 0 40px 0",
  },
  divInput: {
    display: "flex",
    flexWrap: "wrap",
    padding: "20px 12px",
    width: "78%",
    border: "solid 1px rgb(179, 179, 179)",
    borderRadius: "4px",
    margin: "0 7%",
  },
  input: {
    width: "30%",
    border: "none",
  },
  divButtons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    width: "100%",
  },
}));
