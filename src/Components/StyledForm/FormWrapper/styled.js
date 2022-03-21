import styled from "styled-components";

const StyledFormWrapper = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 35rem;
   padding: 2.5rem;
   background-color: white;
   border-radius: 1rem;
   position: relative;

   @media (max-width: 1100px) {
      width: 80vw;
   }
`;

export default StyledFormWrapper;
