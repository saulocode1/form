import styled from "styled-components";

import Refresh from "../../../../assets/icons/refresh.svg";

export const StyledRefreshButton = styled.img.attrs({ src: Refresh })``;

export const RefreshButtonLink = styled.a`
   margin-left: 16rem;
   display: flex;
   opacity: 0;
   visibility: hidden;
   transition: all 1s;
   cursor: pointer;
`;

export const StyledButtonWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   /* border: 1px solid red; */
   height: 3.125rem;
`;
