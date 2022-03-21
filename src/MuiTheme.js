import { createTheme } from "@material-ui/core";

const theme = createTheme({
   palette: {
      primary: {
         main: "#4f4f4f",
         contrastText: "#fff",
      },
   },
   typography: {
      h1: {
         fontFamily: "Poppins",
         textTransform: "none",
         fontSize: "2.6rem",
         fontWeight: 600,
      },
      h2: {
         fontFamily: "Poppins",
         textTransform: "none",
         fontSize: "1.5rem",
         fontWeight: 400,
      },
   },
});

export default theme;
