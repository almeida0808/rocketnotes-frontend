import styled from "styled-components";

export const Container = styled.span`
  border-radius: 5px;
  border: none;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  background-color: ${({ theme }) => theme.COLORS.VIOLET};

  font-weight: 600;
  padding: 0.5rem 1.4rem;
  margin-right: 0.8rem;
`;
