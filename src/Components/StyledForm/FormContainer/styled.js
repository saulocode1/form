import styled from "styled-components";
import Background from "../../../assets/images/vector-wallpaper.jpg"


const FormContainer = styled.section`
   display: flex;
   justify-content: space-between;
   align-items: center;
   /* padding-left: 2.5rem; */
   height: 770px;
   width: 1000px;
   border-radius: 1rem;
   margin-inline: auto;
   background-color: var(--form-color);
   box-shadow: rgba(0, 0, 0, 0.2) 10px 10px 30px,
      rgba(0, 0, 0, 0.3) 10px 10px 30px;
   background: url(${Background}) 10% ;

`;

export default FormContainer;
