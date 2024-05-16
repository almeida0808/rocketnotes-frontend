import { Container, Brand, Menu, Search, Content, NewNotes } from "./styles";
import { FiSearch } from "react-icons/fi";
import { RiAddLine } from "react-icons/ri";

import { Header } from "../../components/header";
import { TextButton } from "../../components/text-button";
import {Input} from "../../components/input"
import { Notes } from "../../components/notes"
import {Section} from "../../components/section"

export function Home() {
  return(
<Container>
<Brand>
<h1>RocketNotes</h1>
</Brand>
<Header/>
<Menu>
<TextButton title="JavaScript" isactived/>
<TextButton title="Node"/>
<TextButton title="React"/>
<TextButton title="SQL"/>

</Menu>

<Search>
<Input placeholder="Pesquisar pelo título" icon={FiSearch}/>

</Search>

<Content>
  <Section title="Minhas Notas">

<Notes data={{
  title:"Testando Notas" , 
  tags:[
    {id:'1',name: 'teste'},
    {id:'2', name:'criando'},
    
]
}}
  />

  </Section>
</Content>

<NewNotes to="/new">
<RiAddLine />
<p>Criar Nota</p>
</NewNotes>
</Container>

  )
}
