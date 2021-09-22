import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  gridContainer: {
    width: "100%",
    margin: "0",
    "& .MuiPaper-root": {
      padding: "14px",
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
  heading: {
    color: theme.palette.common.white,
    fontSize: "1.8rem",
    marginBottom: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& .MuiAvatar-root": {
      width: "25px",
      height: "auto",
      marginLeft: "10px",
    },
    "& .MuiTypography-subtitle1": {
      fontSize: "0.8rem",
    },
  },
  searchBox: {
    display: "flex",
    justifyContent: "flex-end",
    "& .MuiInputBase-root": {
      border: "1px solid #fff",
      borderRadius: "3px",
      color: "#fff",
      padding: "5px 20px",
      fontSize: "1rem",
      textAlign: "center",
    },
  },
}));
