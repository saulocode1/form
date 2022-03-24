import styled from "styled-components";
import Background from "../../../assets/images/vector-wallpaper.jpg";

const FormContainer = styled.section`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 48.125rem;
   width: 62.5rem;
   border-radius: 1rem;
   margin-inline: auto;
   background-color: var(--form-color);
   box-shadow: rgba(0, 0, 0, 0.2) 10px 10px 30px,
      rgba(0, 0, 0, 0.3) 10px 10px 30px;
   background: url(${Background});
   background-size: 73rem;
   background-position-x: 21.6rem;

   @media (max-width: 1100px) {
      width: 80vw;
      background-image: none;
   }

   @media (max-height: 768px) {
      height: 70vh;
   }
`;

export default FormContainer;
