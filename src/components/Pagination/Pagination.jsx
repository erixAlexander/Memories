import useStyles from "./styles";
import PageSquare from "./PageSquare";
import { fetchPostsCount } from "../../api/index.js";
import {  useEffect } from "react";

const Paginate = ({
  setCurrentPage,
  currentPage,
  filter,
  isFiltered,
  pages,
  setPages,
}) => {
  const classes = useStyles();
  const postsPerPage = 4;

  useEffect(() => {
    const getPagesCount = async (filter) => {
      const query = {
        params: {
          filter,
        },
      };
      const res = await fetchPostsCount(query);
      const postsTotal = res.data;
      const count = Math.ceil(postsTotal / postsPerPage);
      const countArray = Array.from(Array(count), (e, i) => i + 1);
      setPages(countArray);
    };
    getPagesCount(filter);
  }, [isFiltered]);

  const prevPage = () => {
    if (currentPage == 1) return;
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage == pages.length) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className={classes.mainContainer}>
      <div onClick={prevPage} className={classes.square}>
        <p>Prev</p>
      </div>
      {pages.length == 0 ? (
        <PageSquare
          currentPage={1}
          setCurrentPage={setCurrentPage}
          key={1}
          page={1}
          classes={classes}
        />
      ) : (
        pages?.map((page) => {
          return (
            <PageSquare
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              key={page}
              page={page}
              classes={classes}
            />
          );
        })
      )}
      <div onClick={nextPage} className={classes.square}>
        <p>Next</p>
      </div>
    </div>
  );
};

export default Paginate;
