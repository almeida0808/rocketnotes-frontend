import { Container } from "../text-button/styles";

export function TextButton({ title, isactived = false,...rest }) {
  return (
     
      <Container type="button" $isActived={isactived.toString()} {...rest}>
      {title}
    </Container>
  );
}
