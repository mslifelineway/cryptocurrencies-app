import {
  Avatar,
  List,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box,
  Typography,
} from "@material-ui/core";
import { Home, LocalActivityOutlined } from "@material-ui/icons";
import React from "react";
import { useLocation } from "react-router";
import useStyles from "./styles";

const Sidebar = () => {
  const classes = useStyles();
  const location = useLocation();

  const items = [
    {
      icon: <Home />,
      text: "Home",
      link: "/",
    },
    {
      icon: <Home />,
      text: "Cryptocurrencies",
      link: "/cryptocurrencies",
    },
    {
      icon: <Home />,
      text: "Exchange",
      link: "/exchange",
    },
    {
      icon: <LocalActivityOutlined />,
      text: "News",
      link: "/news",
    },
  ];
  return (
    <React.Fragment>
      <Box component={Link} href="/" className={classes.titleBox}>
        <Avatar src="/assets/images/cryptocurrency.png" alt="logo" />
        <Typography variant="h5" className={classes.title}>
          Crypto Currencies
        </Typography>
      </Box>
      <List dense={false} className={classes.list}>
        {items.map((item, i) => (
          <ListItem
            component={Link}
            href={item.link}
            className={classes.listItem}
            key={i}
            selected={location.pathname === item.link ? true : false}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>{item.icon}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.text}
              className={classes.listItemText}
            />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default Sidebar;
