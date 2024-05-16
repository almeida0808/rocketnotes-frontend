import styled from "styled-components";
import backgroundImg from "../../assets/3d-rendering-astronaut.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > header {
    width: 100%;
    height: 14.4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 12.4rem;
    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2.4rem;
    }
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  max-width: 35rem;
  margin-top: 3rem;

  > #alterarSenha {
    margin-top: 2.5rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -12.5rem auto 6rem;
  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.VIOLET};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;
