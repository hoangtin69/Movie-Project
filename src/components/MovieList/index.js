import { Container, Grid, useMediaQuery } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieSingle from "../MovieSingle";
import { actGetMovieListApi } from "./modules/action";
import Spinner from "react-spinner-material";
import { useTheme } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { useStyles } from "./style";
const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const renderLoading = () => {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#0ff",
      }}
    >
      <Spinner
        size={120}
        spinnerColor={"#00f"}
        spinnerWidth={1}
        visible={true}
      />
    </div>
  );
};

function MovieList(props) {
  const movieList = useSelector((state) => state.movieListReducer);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const numberOfElement = () => {
    if (isMatchSm) return 6;
    return 8;
  };
  useEffect(() => {
    dispatch(actGetMovieListApi());
  }, []);

  const renderMovieGroup = (movieGroup) => {
    return movieGroup.map((item, index) => {
      return (
        <Container maxWidth="md" className={classes.movieGroup}>
          <Grid key={index} container spacing={3}>
            {renderMovieList(item)}
          </Grid>
        </Container>
      );
    });
  };

  const renderMovieList = (movieList) => {
    return movieList.map((item) => {
      return (
        <Grid key={item.maPhim} item={true} md={3} sm={4} xs={12}>
          <MovieSingle data={item} />
        </Grid>
      );
    });
  };

  return (
    <div className={classes.root}>
      {movieList.loading ? renderLoading() : null}

      <Carousel
        className={classes.carousel}
        animation="slide"
        autoPlay={false}
        navButtonsAlwaysVisible={isMatchSm ? false : true}
        navButtonsAlwaysInvisible={isMatchSm ? true : false}
        NextIcon={<NavigateNextIcon className={classes.navButton} />}
        PrevIcon={<NavigateBeforeIcon className={classes.navButton} />}
        navButtonsProps={{
          style: {
            backgroundColor: "transparent",
          },
        }}
        navButtonsWrapperProps={{
          style: {
            top: "-8%",
          },
        }}
        indicatorIconButtonProps={{
          style: {
            padding: "4px",
          },
        }}
        IndicatorIcon={<FiberManualRecordIcon style={{ fontSize: "20px" }} />}
        activeIndicatorIconButtonProps={{
          style: {
            color: theme.palette.primary.main,
          },
        }}
        indicatorContainerProps={{}}
      >
        {movieList.data
          ? renderMovieGroup(chunkArray(movieList.data, numberOfElement()))
          : null}
      </Carousel>
    </div>
  );
}

export default MovieList;
