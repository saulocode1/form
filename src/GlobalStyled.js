import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
   *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
   }

   body {
      background: linear-gradient(135deg, var(--gradient-1), var(--gradient-2));
      width: 100vw;
      height: 100vh;

      @media (max-height: 768px) {
      overflow: none;
   }
   }

   :root {
      --form-color: #fff;
      --background-color: #262626;

      --text-color: #fff;

      --gradient-1: #1D2671;
      --gradient-2: #C33764;
      --gradient-3: #FE6B8B;
      --gradient-4: #FF8E53;
   }
`;

export default GlobalStyled;
