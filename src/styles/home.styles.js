import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  heading: {
    color: theme.palette.common.white,
    fontSize: "1.5rem",
    margin: "20px 15px 5px 15px",
  },
  gridContainer: {
    width: "100%",
    margin: "0",
    "& .MuiPaper-root": {
      padding: "16px",
      background: "#eee1fc",
      "&:hover": {
        background: "#eee1fcf5",
        boxShadow: `1px 2px 5px 6px rgba(194,157,229,0.75)`,
        "-webkit-box-shadow": `1px 2px 5px 6px rgba(194,157,229,0.75)`,
        "-moz-box-shadow": `1px 2px 5px 6px rgba(194,157,229,0.75)`,
      },
      "& .MuiTypography-h6": {
        fontSize: "1rem",
      },
    },
  },
  showMore: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "20px 15px 5px 15px",
    "& .MuiTypography-h6": {
      color: theme.palette.common.white,
      fontSize: "1.5rem",
    },
    "& .MuiTypography-colorPrimary": {
      color: "#00bcd4",
      fontWeight: "500",
    },
  },
}));
