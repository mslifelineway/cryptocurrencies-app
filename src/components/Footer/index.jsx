import { Box, Divider, Link, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <Paper square className={classes.root}>
      <Box className={classes.root1}>
        <Box className={classes.info}>
          <Typography variant="h6">Cryptocurrencies</Typography>
          <Divider className={classes.divider} />
          <Typography variant="h6">All rights reserved</Typography>
        </Box>
        <Box className={classes.links}>
          <Link href="/" className={classes.link}>
            Home
          </Link>
          <Link href="/" className={classes.link}>
            Exchanges
          </Link>
          <Link href="/" className={classes.link}>
            News
          </Link>
        </Box>
      </Box>
    </Paper>
  );
};

export default Footer;
