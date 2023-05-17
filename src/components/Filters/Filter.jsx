import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts.js";
import TagsChip from "../TagsChip/TagsChip.jsx";
import useStyles from "./styles.js";
import "./styles.css";

const Filter = ({
  setFilter,
  filter,
  currentPage,
  setIsFiltered,
  setCurrentPage,
}) => {
  const inputRef1 = useRef();
  const classes = useStyles();
  const [tagArray, setTagArray] = useState([]);
  const [tag, setTag] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title && !tagArray.length) return;
    dispatch(getPosts(currentPage, filter));
    setIsFiltered((prev) => !prev);
    setCurrentPage(1);
  };

  const handleClear = (e) => {
    e.preventDefault();
    if (!title && !tagArray.length) return;
    setTag("");
    setTagArray([]);
    setTitle("");
    setFilter({ title: "", tagArray: [], isFirstRender: true });
    dispatch(getPosts(currentPage, { title: "", tagArray: [] }));
    setIsFiltered((prev) => !prev);
    setCurrentPage(1);
  };

  useEffect(() => {
    setFilter({
      title,
      tagArray,
    });
  }, [tagArray, title]);

  return (
    <div className={classes.filtersContainer}>
      <h2 style={{ margin: "0 auto", fontWeight: "100" }}>Filters</h2>
      <div style={{ width: "100%" }}>
        <div
          onClick={() => inputRef1.current.focus()}
          className={classes.divInput}
        >
          <input
            ref={inputRef1}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={`${classes.input} input`}
            placeholder="Title"
            type="text"
            name="title"
            id="title"
          />
        </div>
      </div>
      <TagsChip
        tag={tag}
        tagArray={tagArray}
        classes={classes}
        setTag={setTag}
        setTagArray={setTagArray}
      />
      <div className={classes.divButtons}>
        <button
          disabled={!title && !tagArray.length}
          onClick={handleSubmit}
          className="submit-filters"
        >
          APPLY FILTERS
        </button>
        <button
          disabled={!title && !tagArray.length}
          onClick={handleClear}
          className="clear-filters"
        >
          CLEAR FILTERS
        </button>
      </div>
    </div>
  );
};

export default Filter;
