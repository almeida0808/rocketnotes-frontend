import { Container, Links, Content } from "./styles"; // quando importamos o arquivo de css , ele automaticamente já aplica todas estilizações
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Tags } from "../../components/tags";
import { TextButton } from "../../components/text-button";

export function Details() {
  return (
    // existe uma regra no react que faz com o nosso componente retorne apenas um elemento, pra resolver isso podemos ultilizzar o fragment ,que ser ve como um emmbrulhador , sintax fragment =  <> </> ou podemos usar uma div.

    // dentro do return fica o conteudo da nossa interface

    <Container>
      <Header />
      <main>

        <Content>

          <TextButton title="Excluir Nota" />

<h1>Porque usamos isso?</h1>
<p>É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao observar seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal, em vez de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça um inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como modelo de texto padrão, e uma pesquisa por 'lorem ipsum' revelará muitos sites ainda em sua infância. Várias versões evoluíram ao longo dos anos, às vezes por acidente, às vezes propositalmente (injetando humor e coisas do gênero).</p>


          <Section title="Link úteis">
            <Links>
              <li>
                <a href="https://www.rocketseat.com.br/">link 1</a>
              </li>
              <li>
                <a href="https://www.youtube.com.br/">
                  https://www.youtube.com.br/
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com.br/">
                  https://www.instagram.com.br/
                </a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tags title="Ação" />
            <Tags title="Terror" />
            <Tags title="Luta" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
