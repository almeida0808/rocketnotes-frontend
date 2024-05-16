import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;
export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.VIOLET};
  }
`;
export const Menu = styled.ul`
  grid-area: menu;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-weight: 600;

  list-style: none;
  text-align: center;

  gap: 2.4rem;

  > button:first-child {
    padding-top: 6.4rem;
  }
`;
export const Search = styled.div`
  grid-area: search;
  padding: 64px 64px 0;
`;
export const Content = styled.div`
  grid-area: content;

  padding: 64px 64px 0;
  overflow-y: auto;
`;
export const NewNotes = styled(Link)`
  display: FLEX;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  grid-area: newnote;

  background-color: ${({ theme }) => theme.COLORS.VIOLET};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border: none;

  font-size: 2rem;
  font-weight: 500;
`;
