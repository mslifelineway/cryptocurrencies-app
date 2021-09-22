import { Box, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { Sidebar } from "..";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100%",
    flexGrow: 1,
    margin: 0,
    height: "100vh",
  },
  paper: {
    height: "100%",
    background: theme.palette.primary.color,
  },
  rightItem: {
    padding: "2px",
  },
  content: {
    height: `calc(100vh - 84px)`,
    overflowX: "hidden",
    overflowY: "auto",
  },
  footer: {
    height: "80px",
    overflow: "hidden",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.root}>
        <Grid item lg={2} md={2} sm={2} xs={12}>
          <Paper className={classes.paper} square>
            <Sidebar />
          </Paper>
        </Grid>
        <Grid
          item
          lg={10}
          md={10}
          sm={10}
          xs={12}
          className={classes.rightItem}
        >
          <Paper className={classes.paper}>
            <Box className={classes.content}>{children}</Box>
            <Box className={classes.footer}>
              <Footer />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Layout;
