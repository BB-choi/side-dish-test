import styled from "styled-components";

const CategoryWrapper = styled.div`
  padding: ${({ theme: { padding } }) => `${padding.middle} ${padding.large}`};
`;

const Title = styled.p`
  font-family: "Noto Sans KR";
  ${({ theme: { boldFonts } }) => boldFonts.xLarge}
`;

export { CategoryWrapper, Title };
