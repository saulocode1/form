import React from "react";
import UrlLink, { LinksWrapper } from "./styled";
import Header from "./Header/index";

const LinksContainer = () => (
   <LinksWrapper>
      <UrlLink
         href="https://www.linkedin.com/company/taghos-tecnologia/about/"
         target="_blank"
      >
         www.taghos.com.br
      </UrlLink>
   </LinksWrapper>
);

export default LinksContainer;
