import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.VIOLET};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  height: 5.6rem;
  border: 0;
  padding: 0 16px;
  margin-top: 1.6rem;
  border-radius: 0.8rem;
  font-weight: 800;

  &:disabled {
    // estilização do botão quando ele não pode ser clicado, por exemplo em um formulario não preenchido ele não pode ser enviado
    opacity: 0.5;
  }
`;
