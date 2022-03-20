import styled from "styled-components";
import { Button, Box, TextField } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
};
  
const MainForm = () => (
  <>
    <Formik
      initialValues={initialValues}
      onSubmit={(values, formikHelpers) => {
        console.log(values)
      }}
    >
      {() => (
        <Form>
          <TextField
            name="firstName"
            type="firstName"
            variant="outlined"
            color="primary"
            label="Name"
            fullWidth
          />
          <Box height={14} />
          <TextField
            name="email"
            type="email"
            variant="outlined"
            color="primary"
            label="Email Address"
            fullWidth
          />
          <Box height={14} />
          <TextField
            name="password"
            type="password"
            variant="outlined"
            color="primary"
            label="Password"
            fullWidth
          />
          <Box height={16} />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign up
          </Button>
        </Form>
      )}
    </Formik>
  </>
);

export default MainForm;

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
`;
