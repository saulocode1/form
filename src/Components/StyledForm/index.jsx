import React from "react";
import FormContainer from "./FormContainer/styled";
import LinksContainer from "./FormLinks";
import FormWrapper from "./FormWrapper";
import SectionForm from "./SectionForm/styled";

const StyledForm = () => (
   <>
      <SectionForm>
         <FormContainer>
            <FormWrapper />
            <LinksContainer />
         </FormContainer>
      </SectionForm>
   </>
);

export default StyledForm;
