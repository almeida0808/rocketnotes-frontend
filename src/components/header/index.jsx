import { Container , Profile, Logaut} from "./styles";
import {RiShutDownLine} from 'react-icons/ri'


export function Header({name = "Lucas Almeida", ...rest}) {
  return <Container>
    
<Profile  to="/profile">
  
  <img src="https://github.com/almeida0808.png" alt="Foto de Perfil" />

  <div>
    <span>Bem Vindo,</span>
    <strong>{name}</strong>
  </div>
</Profile>

<Logaut>
  <RiShutDownLine/>
</Logaut>
  </Container>;
}
