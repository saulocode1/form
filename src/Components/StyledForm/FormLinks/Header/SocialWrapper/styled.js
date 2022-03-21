import styled from "styled-components";

export const StyledSocialWrapper = styled.div`
   width: auto;
   gap: 1rem;
   display: flex;
   justify-content: space-between;
`;

export const SocialIcon = styled.img.attrs((props) => ({ src: props.src }))``;
