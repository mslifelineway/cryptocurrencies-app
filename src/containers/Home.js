import { Grid, Paper, Typography, Box, Link } from "@material-ui/core";
import millify from "millify";
import React from "react";
import { Layout } from "../components";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { pagePaths } from "../utils/constants";
import useStyles from "../styles/home.styles";
import Cryptocurrencies from "./Cryptocurrencies";

const Home = () => {
  const classes = useStyles();

  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data && data.data && data.data.stats;

  if (isFetching)
    return (
      <Layout>
        <Typography variant="h2" className={classes.heading}>
          Loading....
        </Typography>
      </Layout>
    );

  const {
    total = 0,
    totalExchanges = 0,
    total24hVolume = 0,
    totalMarketCap = 0,
    totalMarkets = 0,
  } = globalStats || {};
  return (
    <Layout>
      <Typography variant="h6" className={classes.heading}>
        Global Crypto Stats
      </Typography>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <Paper>
            <Typography variant="h6">Total Cryptocurrencies</Typography>
            <Typography variant="body1">{total}</Typography>
          </Paper>
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <Paper>
            <Typography variant="h6">Total Exchanges</Typography>
            <Typography variant="body1">{millify(totalExchanges)}</Typography>
          </Paper>
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <Paper>
            <Typography variant="h6">Total Market Cap</Typography>
            <Typography variant="body1">{millify(totalMarketCap)}</Typography>
          </Paper>
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <Paper>
            <Typography variant="h6">Total 24h Volume</Typography>
            <Typography variant="body1">{millify(total24hVolume)}</Typography>
          </Paper>
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <Paper>
            <Typography variant="h6">Total Markets</Typography>
            <Typography variant="body1">{millify(totalMarkets)}</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box className={classes.showMore}>
        <Typography variant="h6">Top 10 crypto currencies</Typography>
        <Link href={pagePaths.cryptocurrencies}>Show More</Link>
      </Box>
      <Cryptocurrencies simplified />
    </Layout>
  );
};

export default Home;
