import { Container } from "../notes/styles";
import { Tags } from "../tags";

export function Notes({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {data.tags /*caso exiista tags criar um footer*/ && (
        <footer>
          {data.tags.map((tag) => (
            <Tags title={tag.name} key={tag.id} />
          ))}
        </footer>
      )}
    </Container>
  );
}
