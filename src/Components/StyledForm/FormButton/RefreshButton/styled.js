import styled from "styled-components";

import Refresh from "../../../../assets/icons/refresh.svg";

export const StyledRefreshButton = styled.img.attrs({ src: Refresh })``;

export const RefreshButtonLink = styled.a`
   display: flex;
   opacity: 0;
   /* visibility: hidden; */
   transition: all 1s;
   cursor: pointer;
   position: absolute;
   margin-top: 100px;
   /* right: 5.625rem;

   @media (max-width: 1100px) {
      right: 16rem;
   } */
`;

export const StyledButtonWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   /* border: 1px solid red; */
   height: 3.125rem;
   /* width: 265px; */
   margin-inline: auto;

   @media (max-width: 500px) {
      width: 240px;
   }
`;
