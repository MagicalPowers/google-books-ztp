import React from "react";
import {
  TextField,
  Button,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import "typeface-roboto";

const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: "red",
      padding: theme.spacing(3, 2, 0, 1)
    },
    title: {
      backgroundColor: "purple",
      border: "2px solid #000",
      margin: "15px",
      padding: theme.spacing(15, 0, 15, 0)
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  };
});

const Nav = () => {
  const classes = useStyles();
  const login = false;
  const userName = "anything";
  //   const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  return (
    <Grid container direction="column">
      <Grid
        container
        item
        alignItems="flex-start"
        direction="row"
        className={classes.root}
      >
        <Typography variant="h5">Google Books</Typography>
        <Typography variant="h6">
          <Button type="button">Search</Button>
        </Typography>
        <Typography variant="h6">
          <Button type="button">Saved</Button>
        </Typography>
      </Grid>
      <Grid item align="center" className={classes.title}>
        <Typography variant="h2" gutterBottom align="center">
          (React) Google Books Search
        </Typography>
        <Typography variant="h3">With a Rather Long Subtitle</Typography>
      </Grid>
    </Grid>
  );
};

export default Nav;
