import React from "react";
import FormContainer from "./FormContainer/styled";
import FormImage from "./FormImage/styled";
import FormWrapper from "./FormWrapper";
import SectionForm from "./SectionForm/styled";

const StyledForm = () => (
   <>
      <SectionForm>
         <FormContainer>
            <FormWrapper/>
            <FormImage/>
         </FormContainer>
      </SectionForm>
   </>
);

export default StyledForm;
