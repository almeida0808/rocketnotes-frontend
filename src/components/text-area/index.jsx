import { Container } from "../text-area/styles";

export function TextArea({ value, ...rest }) {
  return <Container {...rest}>{value}</Container>;
}
