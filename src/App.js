import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";
import GlobalStyled from "./GlobalStyled";
import FormContainer from "./Components/FormContainer/styled";
import FormWrapper from "./Components/FormWrapper/styled";
import MainForm from "./Components/StyledForm/";
import SectionForm from "./Components/SectionForm/styled";

const App = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });

  return (
    <>
      <GlobalStyled />
      <SectionForm>
        <FormContainer>
          <MainForm />
        </FormContainer>
      </SectionForm>
    </>
  );
};

export default App;
