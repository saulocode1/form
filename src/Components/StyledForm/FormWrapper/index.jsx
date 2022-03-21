import React from "react";
import MainForm from "../../MainForm";
import FormTitle, { FormSubtitle } from "../FormText/styled";
import StyledFormWrapper from "./styled";

const FormWrapper = () => (
   <>
      <StyledFormWrapper>
         <FormTitle>Welcome Back</FormTitle>
         <FormSubtitle>Start the Adventure</FormSubtitle>
         <MainForm />
      </StyledFormWrapper>
   </>
);

export default FormWrapper;
