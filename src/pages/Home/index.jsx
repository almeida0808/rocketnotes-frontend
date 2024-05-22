import { Container, Brand, Menu, Search, Content, NewNotes } from "./styles";

import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { RiAddLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

import { TextButton } from "../../components/text-button";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Notes } from "../../components/notes";
import { Input } from "../../components/input";

import { useNavigate } from "react-router-dom";

export function Home() {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [notes, setNotes] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const navigate = useNavigate()

  function handleTagSelected(tagName) {
    // função que adiciona a tag clicada dentro do estado de tags selecionadas

    if (tagName === "all") {
      // caso a tag que tenha sido clicado seja "all"(Todos) ele remove todas tags que estavam dentro do estado selecionadas e deixa apenas "all"(todas)

      const selectAll = () => setTagsSelected([]); // limpa o estado de tags selecionadas
      selectAll(); // roda a função

      return;
    }

    const alreadySelected = tagsSelected.includes(tagName); // verifica se a tag clicada ja está no estado de tags selecionadas , caso esteja retorna true se não false

    if (alreadySelected) {
      // se a tag ja esteja na estado
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName); // retorna um novo array filtrando somente as tags que tem o nome diferente da tag que foi clicada, ou seja remove a tag clicada do estado
      setTagsSelected(filteredTags); // altera o nosso estado de tags selcionads passando o array sem a tag que foi clicada
    } else {
      // caso ainda a tag ainda não esteja no estado de tagas selecionadas ele cria um novo estado colocando todas tags que ja estavam lá e adicionando a nova tag
      setTagsSelected((prevState) => [...prevState, tagName]);
    }
  }

function handleDetails(id){
  navigate(`/details/${id}`)
}

  useEffect(() => {
    // toda vez que tem alguma nova renderização ele entra nesse bloco de código abaixo

    async function fetchTags() {
      // função de buscar tags

      const response = await api.get("/tags"); //ele busca todas as tags lá no nosso back end
      setTags(response.data); // atualiza nosso estado passando todas tags do banco de dados
    }

    fetchTags(); // roda a função
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      );

      setNotes(response.data.NotesComTags
        );
    }

    fetchNotes();
  }, [tagsSelected, search]);

  return (
    <Container>

      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <TextButton
          title="Todos"
          onClick={() => handleTagSelected("all")} // quando clicar ele adiciona o "all" na ista de tags selecionas
          isactive={tagsSelected.length === 0} // isActived fica observando todo instante se é verdade que não tem nenhuma outra tag selecionada, no momento que ele recebe um verdadeiro(true) como resposta ele torna o Todos ativado
        />

        {tags && // casp tenha tags
          tags.map(
            (
              tag // retorna um componente pra cada tag que tenha lá dentro
            ) => (
              <li>
                <TextButton
                  title={tag.name}
                  onClick={() => handleTagSelected(tag.name)} // quando é clicado faz a função de lidar com as tags selecionadas, passa como parametro o nome da tag que foi clicada
                  isactive={tagsSelected.includes(tag.name)} // fica observando se a tag está dentro do estado de tags selecionadas
                />
              </li>
            )
          )}
      </Menu>

      <Search>
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
        />
      </Search>

    <Content>
        <Section title="Minhas Notas">
          {notes.map((note) => 
           <Notes
           key={String(note.id)}
           data={note}
           onClick={()=>handleDetails(note.id)}
           />
          )}
        </Section>
      </Content>

      <NewNotes to="/new">
        <RiAddLine />
        <p>Criar Nota</p>
      </NewNotes>
    </Container>
  );
}
