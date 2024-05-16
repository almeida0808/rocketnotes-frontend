import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 15rem;
  resize: none;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  border-radius: 1rem;
  outline: none;

  padding: 1.6rem;
  margin-bottom: 0.8rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
