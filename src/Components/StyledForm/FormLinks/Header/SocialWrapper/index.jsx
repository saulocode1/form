import React from 'react'

import Instagram from "../../../../../assets/icons/instagram.svg"
import { SocialIcon, StyledSocialWrapper } from './styled';

const SocialWrapper = () => (
   <StyledSocialWrapper>
      <SocialIcon src={Instagram} />
      <SocialIcon />
   </StyledSocialWrapper>
)

export default SocialWrapper;