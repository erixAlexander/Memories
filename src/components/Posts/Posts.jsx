import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles.js";
import { Grid, CircularProgress } from "@material-ui/core";
import { useEffect } from "react";

const Posts = ({
  currentPage,
  filter,
  setIsFiltered,
  setCurrentPage,
  pages,
}) => {
  const { mainContainer } = useStyles();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    if (currentPage != 1 && currentPage > pages.length) {
      setCurrentPage(currentPage - 1);
    }
  }, [pages]);

  return !posts.length ? (
    <div
      style={{
        width: "100%",
        height: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </div>
  ) : (
    <Grid
      className={mainContainer}
      container
      alignContent="stretch"
      spacing={3}
    >
      {posts.map((post) => {
        return (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post
              setIsFiltered={setIsFiltered}
              filter={filter}
              currentPage={currentPage}
              post={post}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Posts;
