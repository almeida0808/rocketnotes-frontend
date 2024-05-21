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
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  max-width: 55rem;
  margin: 3.8rem auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 3.6rem;

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .tags {
    display: grid;
    grid-template-columns: repeat(3, 17.8rem);
    gap: 0.8rem;
    flex-wrap: wrap;
    margin-bottom: 1.6rem;

    input {
      width: 11.3rem;
    }
  }
`;
