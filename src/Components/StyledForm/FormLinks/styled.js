import styled from "styled-components";

export const LinksWrapper = styled.div`
   padding: 40px 20px;
   position: relative;
   height: 100%;
   width: 28.125rem;

   @media (max-width: 1100px) {
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
   color: var(--gradient-3);
   user-select: none;
`;

export const SocialWrapper = styled.div`
   width: auto;
   gap: 1rem;
   display: flex;
   justify-content: space-between;
`;

export default UrlLink;
