import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;
  }
`;
export const Links = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  li {
    > a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
export const Content = styled.div`
  max-width: 55rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }

  > h1 {
    padding-top: 6.4rem;
    padding-bottom: 1.6rem;
    font-size: 3.6rem;
  }

  > p {
    font-weight: 100;
    font-size: 1.6rem;
    text-align: justify;
  }
`;
