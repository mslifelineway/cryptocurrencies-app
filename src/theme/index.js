import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#281AC8",
      color: "#1E0338",
    },
    secondary: {
      main: "#FD749B",
      color: "",
    },
    error: {
      main: "#F85D5D",
    },
    success: {
      main: "#5DF888",
    },
    text: {
      main: "#858585",
    },
  },
});

export default theme;
