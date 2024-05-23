import { Container, Links, Content } from "./styles"; // quando importamos o arquivo de css , ele automaticamente já aplica todas estilizações
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Tags } from "../../components/tags";
import { TextButton } from "../../components/text-button";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Details() {
  const [data, setData] = useState(null);
const navigate = useNavigate()
  const params = useParams();

function handleBack(){
navigate(-1)
}


async function handleRemoveNote(){
  const confirm = window.confirm("Tem certeza que deseja excluir essa nota?")
if(confirm){
await api.delete(`/notes/${params.id}`)
alert("A nota foi deletada com sucesso!")
navigate(-1)

}

}

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);
  return (
    // existe uma regra no react que faz com o nosso componente retorne apenas um elemento, pra resolver isso podemos ultilizzar o fragment ,que ser ve como um emmbrulhador , sintax fragment =  <> </> ou podemos usar uma div.

    // dentro do return fica o conteudo da nossa interface

    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <TextButton 
            onClick={handleRemoveNote}
            title="Excluir Nota" />

            <h1>{data.title}</h1>
            <p>{data.description} </p>
            {
               data.links &&
              <Section title="Link úteis">
                <Links>{
                  data.links.map(link => (
                  <li key={String(link.id)}>
                    <a target="_blank" href={link.url}>{link.url}</a>
                  </li>
                  ))}
                </Links>
              </Section>
            }

            {data.tags &&
            <Section title="Marcadores">
             {
              data.tags.map(tag => (
              <Tags key={String(tag.id)} title={tag.name} />

              ))
             }
            </Section>
            }<Button onClick={handleBack} title="Voltar" />
          </Content>
        </main>
      )}
    </Container>
  );
}
