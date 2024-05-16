import { Container, Form } from "./styles";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { TextArea} from "../../components/text-area"
import { Section } from "../../components/section";
import { NoteItem } from "../../components/note-item";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

export function NewNote() {
  return(
<Container>
<Header />

<main>
<Form>
<header>
  <h1>Criar Nota</h1>
    <Link to="/">voltar</Link>
</header>
<Input placeholder="Título"/>
<TextArea placeholder="Observações"/>

<Section title="links úteis">
  <div className="links">
<NoteItem value="almeida.dev"/>
<NoteItem isNew placeholder="Novo link"/>
</div>
</Section>

<Section title="Marcadores">
  <div className="tags">
<NoteItem value="dev"/>
<NoteItem isNew placeholder="Nova Tag"/>
<NoteItem isNew placeholder="Nova Tag"/>

</div>
</Section>

<Button title="Salvar"/>
</Form>

</main>
</Container>

  )
}
