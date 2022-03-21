import GlobalStyled from "./GlobalStyled";
import FormContainer from "./Components/FormContainer/styled";
import MainForm from "./Components/StyledForm/";
import SectionForm from "./Components/SectionForm/styled";

const App = () => (
   <>
      <GlobalStyled />
      <SectionForm>
         <FormContainer>
            <MainForm />
         </FormContainer>
      </SectionForm>
   </>
);

export default App;
