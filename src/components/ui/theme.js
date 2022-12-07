import { createTheme } from "@mui/material";

export default createTheme({
    palette: {
        common: {
            blue: "#000000",
            orange: "#FFBA60",
        },
        primary: {
            main: "#000000",
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
