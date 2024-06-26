import { Container , Profile, Logaut} from "./styles";
import {RiLogoutCircleLine} from 'react-icons/ri'
 import {useAuth} from "../../hooks/auth"
 import { api } from "../../services/api";
 import avatarPlaceholder from "../../assets/profile-undefined.png"
 import { useNavigate } from "react-router-dom";

export function Header({...rest}) {
  
  const {user, signOut} = useAuth()
  const avatarUrl =  user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const navigate = useNavigate()

function handleSignOut(){
  signOut()
  navigate("/")
}

  return <Container>
    
<Profile  to="/profile">
  
  <img src={avatarUrl} alt={`Foto de ${user.name}`} />

  <div>
    <span>Bem Vindo,</span>
    <strong>{user.name}</strong>
  </div>
</Profile>

<Logaut onClick={handleSignOut}>
  <RiLogoutCircleLine/>
</Logaut>
  </Container>;
}
