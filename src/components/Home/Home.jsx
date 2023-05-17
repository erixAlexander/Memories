import { Container, Grow, Grid } from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts } from "../../actions/posts";
import Paginate from "../Pagination/Pagination";
import Filter from "../Filters/Filter";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [filter, setFilter] = useState({
    title: "",
    tagArray: [],
    isFirstRender: true,
  });
  const [isFiltered, setIsFiltered] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(currentPage, filter));
  }, [dispatch, currentPage]);

  return (
    <>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts
                setCurrentPage={setCurrentPage}
                pages={pages}
                setIsFiltered={setIsFiltered}
                filter={filter}
                currentPage={currentPage}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Filter
                setCurrentPage={setCurrentPage}
                setIsFiltered={setIsFiltered}
                setFilter={setFilter}
                filter={filter}
                currentPage={currentPage}
              />
              <Form
                setIsFiltered={setIsFiltered}
                filter={filter}
                currentPage={currentPage}
              />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      <Paginate
        pages={pages}
        setPages={setPages}
        isFiltered={isFiltered}
        filter={filter}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Home;
