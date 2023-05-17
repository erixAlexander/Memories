import { Chip } from "@material-ui/core";
import { useRef } from "react";

const TagsChip = ({ tagArray, setTag, setTagArray, tag, classes }) => {
  const inputRef2 = useRef();

  const handleTags = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (tagArray.length == 6) return;
      setTagArray((prev) => [...prev, tag]);
      setTag("");
    }
  };

  return (
    <div style={{ width: "100%" }}>
      {!tagArray.length && tag && (
        <p className="ptag">Press enter to add a tag</p>
      )}
      <div
        onKeyDown={handleTags}
        onClick={() => inputRef2.current.focus()}
        className={classes.divInput}
      >
        {tagArray.map((item, index) => {
          return (
            <Chip
              onDelete={(e) => {
                setTagArray((prev) => {
                  return prev.filter((e, i) => i != index);
                });
              }}
              key={index}
              label={item}
              size="small"
            />
          );
        })}
        <input
          ref={inputRef2}
          onChange={(e) => setTag(e.target.value)}
          value={tag}
          className={`${classes.input} input`}
          placeholder="Tags"
          type="text"
          name="tags"
          id="tags"
        />
      </div>
    </div>
  );
};

export default TagsChip;
