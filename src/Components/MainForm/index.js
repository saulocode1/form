import { React } from "react";
import { Box, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation } from "react-query";

import { StyledButton } from "../StyledForm/FormButton";
import { StyledButtonWrapper } from "../StyledForm/FormButton/RefreshButton/styled";
import RefreshButton from "../StyledForm/FormButton/RefreshButton";

const validationSchema = yup.object({
   firstName: yup.string().required("First name is required."),
   email: yup
      .string()
      .email("Enter a valid email.")
      .required("Email is required."),
   password: yup.string().required("Password is required."),
});

const MainForm = () => {
   const { mutate, isLoading, isSuccess } = useMutation(
      "postUser",
      async (values) => {
         return new Promise((resolve, _) => {
            setTimeout(() => {
               console.log(JSON.stringify(values));
               resolve();
            }, 2000);
         });
      },

      {
         onSuccess: () => {
            document.querySelector("#teste").style.opacity = "1";
            document.querySelector("#teste").style.visibility = "visible";
            document.querySelector("#teste").style.WebkitTransition = "all 1s;";
            document.querySelector("button").textContent = "Success!";
            document.querySelector("button").style.background =
               "linear-gradient(45deg, #11998e, #38ef7d)";
            document.querySelector("button").style.boxShadow =
               "0 3px 5px 2px rgba(0, 0, 0, 0.1)";
         },
      }
   );

   console.log(isLoading);

   const formik = useFormik({
      initialValues: {
         firstName: "",
         email: "",
         password: "",
      },
      onSubmit: (values) => {
         mutate(values);
      },
      validationSchema: validationSchema,
   });

   return (
      <>
         <form onSubmit={formik.handleSubmit}>
            <TextField
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
               fullWidth
            />
            <Box height={14} />
            <TextField
               name="email"
               type="email"
               variant="outlined"
               color="primary"
               label="Email Address"
               value={formik.values.email}
               onChange={formik.handleChange}
               error={formik.touched.email && Boolean(formik.errors.email)}
               helperText={formik.touched.email && formik.errors.email}
               fullWidth
            />
            <Box height={14} />
            <TextField
               name="password"
               type="password"
               variant="outlined"
               color="primary"
               label="Password"
               value={formik.values.password}
               onChange={formik.handleChange}
               error={
                  formik.touched.password && Boolean(formik.errors.password)
               }
               helperText={formik.touched.password && formik.errors.password}
               fullWidth
            />
            <Box height={30} />
            <StyledButtonWrapper>
               <StyledButton isLoading={isLoading} isSuccess={isSuccess} />
               <RefreshButton />
            </StyledButtonWrapper>
         </form>
      </>
   );
};

export default MainForm;
