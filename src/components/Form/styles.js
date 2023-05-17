import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: "10px",
  },
  divInput: {
    display: "flex",
    flexWrap: "wrap",
    padding: "19px 4px",
    width: "92%",
    border: "solid 1px rgb(179, 179, 179)",
    borderRadius: "4px",
    margin: "2.8%",
  },
  input: {
    width: "30%",
    border: "none",
  },
}));
