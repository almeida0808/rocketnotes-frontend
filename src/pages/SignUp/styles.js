import styled from "styled-components";
import backgroundImg from "../../assets/3d-rendering-astronaut.jpg";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > #title {
    padding-bottom: 4.8rem;
    line-height: 3.5rem;

    h1 {
      color: ${({ theme }) => theme.COLORS.VIOLET};
      font-weight: 700;
      font-size: 4.8rem;
    }
    span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-weight: 300;
      font-size: 1.4rem;
    }
  }

  > h2 {
    padding-bottom: 4.8rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.VIOLET};
    padding-top: 12rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.4;
`;
