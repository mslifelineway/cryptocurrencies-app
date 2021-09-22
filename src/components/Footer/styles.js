import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee1fc",
  },
  info: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiTypography-h6": {
      fontSize: "1rem",
    },
  },
  divider: {
    height: "15px",
    backgroundColor: "#494949",
    margin: "4px 10px",
    width: 2,
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5px",
    "& .MuiTypography-root": {
      fontSize: "1rem",
      margin: "0 10px",
      color: "#1e0338",
    },
  },
}));
