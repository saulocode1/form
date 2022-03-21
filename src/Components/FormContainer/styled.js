import styled from "styled-components";
import Background from "../../assets/images/background.avif";

const FormContainer = styled.section`
   padding: 2rem;
   height: 800px;
   width: 1200px;
   border-radius: 3.125rem;
   margin-inline: auto;
   /* background: url(${Background}) no-repeat; */
   background-color: var(--form-color);
   box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px, rgba(0, 0, 0, 0.3) 0px 5px 15px;
`;

export default FormContainer;
