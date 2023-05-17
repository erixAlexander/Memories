const PageSquare = ({ classes, page, setCurrentPage, currentPage }) => {
  return (
    <div
      onClick={() => setCurrentPage(page)}
      className={
        currentPage == page
          ? `${classes.square} ${classes.active}`
          : classes.square
      }
    >
      <p>{page}</p>
    </div>
  );
};

export default PageSquare;
