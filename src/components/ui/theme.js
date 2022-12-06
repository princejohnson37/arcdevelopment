import { createTheme } from "@mui/material";

export default createTheme({
    palette: {
        common: {
            blue: "#0B72B9",
            orange: "#FFBA60",
        },
        primary: {
            main: "#0B72B9",
        },
        secondary: {
            main: "#FFBA60",
        },
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white",
        },
    },
});
