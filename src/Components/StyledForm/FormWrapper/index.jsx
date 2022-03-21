import { Box, createTheme, ThemeProvider, Typography } from "@material-ui/core";
import React from "react";
import MainForm from "../../MainForm";
import StyledFormWrapper from "./styled";

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
         fontSize: "2.8125rem",
         fontWeight: 600,
      },
      h2: {
         fontFamily: "Poppins",
         textTransform: "none",
         fontSize: "1.5625rem",
         fontWeight: 400,
      },
   },
});

const FormWrapper = () => (
   <>
      <ThemeProvider theme={theme}>
         <StyledFormWrapper>
            <Typography variant="h1" fontFamily="Poppins" color="primary">
               Welcome Back
            </Typography>
            <Box height={10} />
            <Typography variant="h2" fontFamily="Poppins" color="primary">
               Start the Adventure
            </Typography>
            <Box height={40} />
            <MainForm />
         </StyledFormWrapper>
      </ThemeProvider>
   </>
);

export default FormWrapper;
