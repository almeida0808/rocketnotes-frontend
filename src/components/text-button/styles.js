import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme, $isactived }) =>
    $isactived ? theme.COLORS.VIOLET : theme.COLORS.GRAY_100};
  border: none;
  font-size: 1.6rem;
`;
