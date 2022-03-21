import styled from "styled-components";

export const LinksWrapper = styled.div`
   padding: 2.5rem 1.25rem;
   position: relative;
   height: 100%;
   width: 28.125rem;

   @media (min-width: 1000px) {
      display: none;
   }
`;

const UrlLink = styled.a`
   font-size: 1.25rem;
   color: var(--text-color);
   position: absolute;
   bottom: 0.625rem;

   cursor: pointer;
   text-decoration: none;
`;

export const Taghos = styled.h1`
   font-size: 1.875rem;
   color: var(--text-color);
   user-select: none;
   background: -webkit-linear-gradient(90deg, var(--gradient-3) 50%, var(--gradient-4) 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SocialWrapper = styled.div`

`;

export const Header = styled.header`

`;

export default UrlLink;
