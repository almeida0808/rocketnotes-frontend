import { Container } from "../tags/styles";

export function Tags({ title ,...rest}) {
  return (
    <Container {...rest}>
     {title}
    </Container>
  );
}
