import { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.js";
import { unSetId } from "../../actions/currentId.js";
import TagsChip from "../TagsChip/TagsChip.jsx";
import useStyles from "./styles.js";

const Form = ({ currentPage, filter, setIsFiltered }) => {
  const { root, paper, fileInput, form, buttonSubmit, divInput, input } =
    useStyles();
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const classes = { divInput, input };
  const [tagArray, setTagArray] = useState([]);
  const [tag, setTag] = useState("");

  const user = JSON.parse(localStorage.getItem("profile"));
  const currentId = useSelector((state) => state.currentId);
  const post = useSelector((state) =>
    state.posts.find((post) => post._id == currentId)
  );
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "tags") {
      setPostData((prev) => {
        return { ...prev, [name]: value.split(",") };
      });
    } else {
      setPostData((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };
  console.log(postData);
  useEffect(() => {
    setPostData((prev) => {
      return { ...prev, tags: tagArray };
    });
  }, [tagArray]);

  const resetForm = () =>
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, name: user.userInfo.name })
      );
    } else {
      dispatch(
        createPost(
          { ...postData, name: user.userInfo.name },
          currentPage,
          filter,
          setIsFiltered
        )
      );
    }
    resetForm();
  };

  const clear = (e) => {
    e.preventDefault();
    resetForm();
    dispatch(unSetId());
  };

  useEffect(() => {
    currentId && setPostData(post);
  }, [currentId]);

  if (!user?.userInfo?.name) {
    return (
      <Paper className={paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={paper}>
      <form
        className={`${form} ${root}`}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h6"> Creating a Memory</Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <TagsChip
          tagArray={tagArray}
          setTagArray={setTagArray}
          classes={classes}
          tag={tag}
          setTag={setTag}
        />
        <div className={fileInput}>
          <FileBase
            name="selectedFile"
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData((prev) => ({ ...prev, selectedFile: base64 }))
            }
          />
        </div>
        <Button
          variant="contained"
          className={buttonSubmit}
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          className={buttonSubmit}
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
