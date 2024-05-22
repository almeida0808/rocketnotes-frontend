import { Container } from "../text-button/styles";

export function TextButton({ title, isactive ,...rest }) {
  return (
     
      <Container type="button" isActive={isactive} {...rest}>
      {title}
    </Container>
  );
}
