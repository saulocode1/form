import styled from "styled-components";
import { Button, Box, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
   firstName: yup.string().required("First name is required"),
   email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
   password: yup.string().required("Passowrd is required"),
});

const MainForm = () => {
   const formik = useFormik({
      initialValues: {
         firstName: "",
         email: "",
         password: "",
      },
      onSubmit: (values) => {
         console.log(JSON.stringify(values));
      },
      validationSchema: validationSchema,
   });
   return (
      <>
         <form onSubmit={formik.handleSubmit}>
            <TextField
               fullWidth
               name="firstName"
               type="firstName"
               variant="outlined"
               color="primary"
               label="Name"
               value={formik.values.firstName}
               onChange={formik.handleChange}
               error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
               }
               helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <Box height={14} />
            <TextField
               fullWidth
               name="email"
               type="email"
               variant="outlined"
               color="primary"
               label="Email Address"
               value={formik.values.email}
               onChange={formik.handleChange}
            />
            <Box height={14} />
            <TextField
               fullWidth
               name="password"
               type="password"
               variant="outlined"
               color="primary"
               label="Password"
               value={formik.values.password}
               onChange={formik.handleChange}
            />
            <Box height={16} />
            <Button type="submit" variant="contained" color="primary" fullWidth>
               Sign up
            </Button>
         </form>
      </>
   );
};

export default MainForm;

export const StyledForm = styled.div`
   display: flex;
   flex-direction: column;
`;
