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
  Typography,
  Button,
  Box
} from "@material-ui/core";

import useAxios from "axios-hooks";
import SearchBar from "../SearchBar";

// const [{ data: article, loading }, getData] = useAxios(
//   "https://www.cbr.com/category/comics/reviews/"
// );

const News = () => {
  //   if (loading) {
  //     return <></>;
  //   }

  return (
    <Box container fullWidth margin="3px" item border={1}>
      <Grid
        container
        item
        fullWidth
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid container direction="column" item>
          <Grid item direction="row">
            <Typography variant="h5">Results</Typography>
            <Box fullWidth border={1} margin="15">
              <Grid container direction="row" item>
                <Grid container direction="row" item>
                  <Grid container item direction="row" justify="space-between">
                    <Typography variant="h5">Example Title</Typography>
                    <Button type="button">View</Button>
                    <Button type="button">Save</Button>
                  </Grid>
                  <Grid container direction="column">
                    <Grid item>
                      <Box border={1} padding="15" margin="15">
                        <SearchBar></SearchBar>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box border={1} padding="15" margin="15">
                        <SearchBar></SearchBar>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default News;
