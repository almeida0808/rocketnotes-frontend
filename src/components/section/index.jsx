import styled from "styled-components";
import { Container } from "../section/styles";

export function Section({ title, children }) {
  return ( // children é o conteudo que cada section vai ter, pois são diferentes
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}
