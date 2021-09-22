import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  titleBox: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    "&:hover": {
      textDecoration: "none",
    },
  },
  title: {
    color: theme.palette.common.white,
    whiteSpace: "nowrap",
    marginLeft: "10px",
    fontSize: "1.2rem",
  },
  listItem: {
    padding: "0",

    "&:hover": {
      textDecoration: "none",
      background: "#816c9694",
    },
    "&.Mui-selected": {
      background: "#8b62b5",
      "&:hover": {
        background: "#8b62b5",
      },
    },
  },
  avatar: {
    backgroundColor: "transparent",
  },
  listItemText: {
    "& .MuiTypography-body1": {
      color: theme.palette.common.white,
      fontSize: "14px",
    },
  },
}));
