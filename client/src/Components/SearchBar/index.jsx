import React, { Component, useState } from "react";
// import API from "../../utils/API";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Loading,
  Collapse,
  Paper,
  Typography
} from "@material-ui/core";

import useAxios from "axios-hooks";

// const [{ data: article, loading }, getData] = useAxios(
//   "https://www.cbr.com/category/comics/reviews/"
// );

const News = () => {
  //   if (loading) {
  //     return <></>;
  //   }

  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="baseline"
    >
      <Grid item>
        <Typography variant="h5">Search Result</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">This will be a search result area</Typography>
      </Grid>
    </Grid>
  );
};

export default News;
