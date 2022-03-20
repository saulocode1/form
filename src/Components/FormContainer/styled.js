import styled from "styled-components";
import Background from "../../assets/images/background.avif";

const FormContainer = styled.section`
   padding: 6.25rem;
   height: 30rem;
   width: 40rem;
   border-radius: 3.125rem;
   margin-inline: auto;
   /* background: url(${Background}) no-repeat; */
   background-color: var(--form-color);
   box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px, rgba(0, 0, 0, 0.3) 0px 5px 15px;
`;

export default FormContainer;
