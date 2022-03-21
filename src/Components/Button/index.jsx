import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const theme = createTheme({
   palette: {
      primary: {
         main: "#7300D7",
         contrastText: "#fff",
      },
   },
   typography: {
      allVariants: {
        fontFamily: 'Poppins',
        textTransform: 'none',
        fontSize: 16,
      },
    },
});

const StyledButton = () => {
   return (
      <ThemeProvider theme={theme}>
         <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
            SIGN UP
         </Button>
      </ThemeProvider>
   );
};

export default StyledButton;
