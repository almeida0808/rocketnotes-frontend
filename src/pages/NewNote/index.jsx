import { Container, Form } from "./styles";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { TextArea } from "../../components/text-area";
import { Section } from "../../components/section";
import { NoteItem } from "../../components/note-item";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";

export function NewNote() {
  const [links, setLinks] = useState([]); // estado que guarda todos os link que ja foram adicionados
  const [newLink, setNewLink] = useState(""); // estado que guarda um novo link temporariamente para ser enviado para lista de links

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

const navigate = useNavigate()

  function handleAddLink() {
    // função para lidar com Adicionar link

    setLinks((prevState) => [...prevState, newLink]); // muda o estado da lista d links colocando todos os links que ja estavam la(eles estão dentro do prevState) e adiciona o novo link nessa lista
    setNewLink(""); // esvazia o estado que guarda o novo link , para que no proximo link que for adicionado esse estado esteja vazio
  }

  // função para lidar com remover link
  function handleRemoveLink(
    deleted /*deleted é o link que foi clicado para ser removido*/
  ) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted)); // entra na nossa lista de links e faz um filtro verificando quais são os liinks que são diferente do deleted, ou seja os links que não foram clicados sao o "link" ja o que foi clicado é o "deleted", então ele vai retornar uma lista removendo esse deleted
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
if(!title){
  alert("Insira um título na nota.")
}
if(newLink){
  alert("Ops... Um link ficou esquecido no formulario, confirme o link ou deixe o campo vazio!")
}
if(newTag){
  alert("Ops... Uma tag ficou esquecida no formulario, confirme a tag ou deixe o campo vazio!")

}
    await api.post("/notes", {
      title,
      description,
      tags,
      links,
    });
    alert("Nota criada com sucesso!");
    navigate("/")
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">voltar</Link>
          </header>
          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="links úteis">
            <div className="links">
              {links.map(
                (
                  link,
                  index // percorre nossa lista de links e renderiza cada link que tiver dentro da lista
                ) => (
                  <NoteItem
                    key={String(index)}
                    value={link}
                    onClick={() => handleRemoveLink(link)} // quando clica no botão de remover ele envia como parametro qual link que foi clicado
                  />
                )
              )}

              <NoteItem
                value={newLink}
                isNew
                placeholder="Novo link"
                onChange={(e) => setNewLink(e.target.value)} // envia o link para nosso estado de new link
                onClick={handleAddLink} // quando for clicado faz a função de adicionar novo link
              />
            </div>
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <NoteItem
                className="newTag"
                value={newTag}
                isNew
                placeholder="Nova Tag"
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
