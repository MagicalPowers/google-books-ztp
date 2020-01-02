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
  makeStyles,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  TextField,
  Button,
  Box
} from "@material-ui/core";

import useAxios from "axios-hooks";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: 900
  }
}));

const Header = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Box container fullWidth margin="3px" item border={1}>
      <Grid
        container
        direction="column"
        justify="space-between"
        fullWidth
        alignItems="flex-start"
      >
        <Grid item>
          <Typography variant="h5">Book Search</Typography>
        </Grid>
        <Grid container item>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Book</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={values.amount}
              fullWidth
              onChange={handleChange("amount")}
              startAdornment={
                <InputAdornment position="start"> </InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-end"
        >
          <Button type="button">Search</Button>{" "}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
