import {
  Grid,
  Paper,
  Typography,
  Box,
  Avatar,
  Link,
  InputBase,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useStyles from "../styles/cryptocurrencies.styles";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Layout } from "../components";
import millify from "millify";

const Cryptocurrencies = ({ simplified }) => {
  const classes = useStyles();
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const coins =
      (cryptosList && cryptosList.data && cryptosList.data.coins) || [];

    let filterCryptos = coins;
    if (searchTerm && searchTerm !== "") {
      filterCryptos = coins.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setCryptos(filterCryptos || []);
  }, [cryptosList, searchTerm]);

  const renderLoading = () => (
    <Typography variant="h2" className={classes.heading}>
      Loading....
    </Typography>
  );
  if (isFetching)
    return simplified ? renderLoading() : <Layout>{renderLoading()} </Layout>;

  const renderBody = () => {
    return (
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.searchBox}
        >
          <InputBase
            placeholder="Search cryptos"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
        {cryptos &&
          cryptos.map((currency) => (
            <Grid item lg={4} md={6} sm={6} xs={12} key={currency.id}>
              <Paper>
                <Box className={classes.heading}>
                  <Typography
                    variant="h6"
                    component={Link}
                    href={`/crypto/${currency.id}`}
                  >
                    {currency.name}
                  </Typography>
                  <Avatar src={currency.iconUrl} alt="icon" />
                </Box>
                <Typography variant="subtitle1">
                  Price: {millify(currency.price)}
                </Typography>
                <Typography variant="subtitle1">
                  Market Cap: {millify(currency.marketCap)}
                </Typography>
                <Typography variant="subtitle1">
                  Daily Change: {millify(currency.change)}
                </Typography>
              </Paper>
            </Grid>
          ))}
      </Grid>
    );
  };
  return simplified ? renderBody() : <Layout>{renderBody()} </Layout>;
};

export default Cryptocurrencies;
