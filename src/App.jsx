import FormContainer from "./Components/FormContainer/styled";
import MainForm from "./Components/MainForm";
import SectionForm from "./Components/SectionForm/styled";
import FormWrapper from "./Components/FormWrapper/styled";
import { ThemeProvider } from "@material-ui/core";

const App = () => (
   <>
      <ThemeProvider>
         <SectionForm>
            <FormContainer>
               <FormWrapper>
                  <MainForm />
               </FormWrapper>
            </FormContainer>
         </SectionForm>
      </ThemeProvider>
   </>
);

export default App;
