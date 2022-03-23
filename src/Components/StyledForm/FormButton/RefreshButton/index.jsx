import React from "react";
import { StyledRefreshButton, RefreshButtonLink } from "./styled";

const RefreshButton = () => {

   return (
      <>
         <RefreshButtonLink id="arrowButton">
            <StyledRefreshButton />
         </RefreshButtonLink>
      </>
   );
};

export default RefreshButton;
