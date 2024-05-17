import { Container , Profile, Logaut} from "./styles";
import {RiLogoutCircleLine} from 'react-icons/ri'
 import {useAuth} from "../../hooks/auth"

export function Header({name = "Lucas Almeida", ...rest}) {
  const {signOut} = useAuth()
  
  return <Container>
    
<Profile  to="/profile">
  
  <img src="https://github.com/almeida0808.png" alt="Foto de Perfil" />

  <div>
    <span>Bem Vindo,</span>
    <strong>{name}</strong>
  </div>
</Profile>

<Logaut onClick={signOut}>
  <RiLogoutCircleLine/>
</Logaut>
  </Container>;
}
