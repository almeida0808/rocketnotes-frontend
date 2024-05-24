import { Container, Links, Content } from "./styles"; // quando importamos o arquivo de css , ele automaticamente já aplica todas estilizações
import { TextButton } from "../../components/text-button";
import { Section } from "../../components/section";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Tags } from "../../components/tags";

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Details() {
  // pagina que mostra os detalhes da nota que for clicada
  //

  const [data, setData] = useState(null); // estado dos dados da nota, começa como null
  const navigate = useNavigate(); // função de navegação da dom
  const params = useParams(); // permite pegarmos parametros da requisição

  function handleBack() {
    // função que cuida dos botões de voltar da aplicação
    navigate(-1); // navigate com -1 de parrametro é basicamente um metodo que ele volta pra pagina anterior quando é acionado
  }

  async function handleRemoveNote() {
    // função que é chamada quando o usuário clica no botão de excuir nota
    const confirm = window.confirm("Tem certeza que deseja excluir essa nota?"); // usa o window confirm, função do  propio js que envia como se fosse um alert que te permite clicar em sim ou não, e retorna um verdadeiro ou falso dependendo da sua resposta

    if (confirm) {
      // caso o usuário confirm que deseja excluir ele realiza a função de deletar
      await api.delete(`/notes/${params.id}`); // faz uma requisição na nossa api com o metodo delete informando a rota que está la no back end, e esse "params.id" é o id da nota que é passado como parametro na rota
      alert("A nota foi deletada com sucesso!"); // avisa que a nota foi deletada
      navigate(-1); // volta pra pagina anterios
    }

    // caso o usuário não confirme que quer deletar ele simplesmente não faz nada
  }

  useEffect(() => {
    // esse useEffect realiza a função de buscar a nota la na nossa api toda vez que o params id e isso é informado dentro do [] no final do useEffect
    async function fetchNote() {
      // função buscar notas
      try {
        // tente buscar
        const response = await api.get(`/notes/${params.id}`); //faz uma requisição do tipo get na nossa rota /notes e passa como parametro o id da nota e guarda a resposta que for enviada pela nossa api dentro da const response
        setData(response.data); // atualiza os dados da nota passando a respota da api usado o response.data
      } catch (error) {
        // caso de algum erro de por exemplo buscar uma nota que foi criada por outro usuário sem ser oq está logado eele cai dentro desse catch
        alert(`Erro ao carregar nota: (${error.message})`); // manda uma mensage de erro e mostra qual a mensagem de erro que a api devolveu

        navigate("/"); // retorna pra pagina de inicio
      }
    }
    fetchNote(); // roda a função que foi criada acima
  }, [params.id]); // faz oq eu disse la em cima , avisa que toda vez que o params.id mudar ele tem que fazer a função de dentro do useEffect

  return (
    // existe uma regra no react que faz com o nosso componente retorne apenas um elemento, pra resolver isso podemos ultilizzar o fragment ,que ser ve como um emmbrulhador , sintax fragment =  <> </> ou podemos usar uma div.

    // dentro do return fica o conteudo da nossa interface

    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            {/*quando clicar no botão de excluir faz a função handl */}

            <TextButton onClick={handleRemoveNote} title="Excluir Nota" />{" "}
            {/* pega as informações de dentro dos dados retornado da nossa api, que foram guardados dentro do estado data*/}
            <h1>{data.title}</h1>
            <p>{data.description} </p>
            {data.links && (
              <Section title="Link úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a target="_blank" href={link.url}>
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}
            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tags key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}
            <Button onClick={handleBack} title="Voltar" />
          </Content>
        </main>
      )}
    </Container>
  );
}
