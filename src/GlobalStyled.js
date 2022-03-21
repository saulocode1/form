import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
   *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
   }

   body {
      background: linear-gradient(135deg, #1D2671, #C33764);
      width: 100vw;
      height: 100vh;
   }

   :root {
      --form-color: #fff;
      --background-color: #262626;

      --gradient-1: hsla(232, 16%, 19%, 0.65);
      --gradient-2: hsla(222, 10%, 34%, 0.65);
   }
`;

export default GlobalStyled;
