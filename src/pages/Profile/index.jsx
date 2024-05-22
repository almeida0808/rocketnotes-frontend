import { useState } from "react"; 
import { useAuth } from "../../hooks/auth"; // nosso contexto de autenticaão 
import { api } from "../../services/api"; // conexão com nosso back end


import avatarPlaceholder from "../../assets/profile-undefined.png"
// nossa imagem pra quando o usuário não tem uma imagem definida
import { Container, Form, Avatar } from "./styles"; // estilização do nosso front end
import { // import icons
  FiMail,
  FiLock,
  FiCamera,
  FiArrowLeft,
  FiUser,
} from "react-icons/fi";
//COMPONENTES
import { Input } from "../../components/input"; 
import { Button } from "../../components/button";

// PAGE PROFILE
export function Profile() {
  const { user, updateProfile } = useAuth(); // pega os dados do user e a função de update do nosso contexto

   // os estados de nome e email ja iniciam com os ultimos valores que foram definidos pelo user na hora de criar a conta ou entao na ultima vez que ele aualizou
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  // os estados de senha nova e senha antiga começam vazios para manter sigilo.  
  const [OldPassword, setOldPassword] = useState();
  const [NewPassword, setNewPassword] = useState();


  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` // caso o usuário ja tenha uma imagem de perfil ele cria um link usando o baseURL(http://localhost:5173)/files/{nome da imagem que esta dentro do banco de dados já com uma criptograia, para n ter risco de ter nomes repetidos}
  : avatarPlaceholder // caso não tenha nenhuma imagem defnida ele coloca a imagem default que criamos


  const [avatar, setAvatar] = useState(avatarUrl); // guarda o endereço da imagem do usuário
  const [avatarFile, setAvatarFile] = useState(null); // guarda o arquivo da imagem pra enviar pra ser enviado pro nosso servidor(backend)
  
  async function handleUpdate() { // função que é chamada quando o botão é pressionado
    const updated = { // junta todas informações atualizadas num objeto com nome de user para passarmos pra nossa função de atualizar a foto
      name,
      email,
      password: NewPassword,
      old_password: OldPassword,
    };

const userUpdated = Object.assign(user, updated)



    await updateProfile({ user, avatarFile }); // envia pra nossa função update o arquivo da imagem e as informações do usuário
  }

  async function handleChangeAvatar(event) { // quando enviamos um novo arquivo no input essa função é chamada
   
    const file = event.target.files[0]; // guarda o arquivo que foi enviado pelo usuário
    setAvatarFile(file); // guarda esse arquivo no nosso estado


    const imagePreview = URL.createObjectURL(file); // cria um URl temporario do arquivo que foi enviado, para que possa ser atualizado instantaneamente a imagem e o usuário poder ver a imagem antes de clicar no botão de salvar, então caso ele saia sem confirmar a atualização de perfil essa imagemPReviw vai sumir e a imagem que esta salva vai voltar a ser a foto de perfil do usuário
    setAvatar(imagePreview); // coloca a imagem preview como a foto do usuário para ele ter uma pre vizualização antes de confirmar
  }
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Avatar>
          <img src={avatar /*coloca a imagem que foi definifa pelo usuário ou a imagem padrao*/} alt="Foto do usuário" /> 
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar /*quando acontece o evento de adicionar um arquivo nesse input, ele faz a função de lidar com mudança de avatar*/} />
          </label>
        </Avatar>
        <Input
          onChange={(e) => setName(e.target.value)} // quando é digitado algo no input ele passa esse valor digitado pro setName para definir um novo valor pro name
          value={name}
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input
          onChange={(e) => setEmail(e.target.value)}  // quando é digitado algo no input ele passa esse valor digitado pro setEmail para definir um novo valor pro email
          value={email}
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />
        <div id="alterarSenha">
          <Input
            onChange={(e) => setOldPassword(e.target.value)} // quando é digitado algo no input ele passa esse valor digitado pro setOldPassword 
            placeholder="Senha Atual"
            type="password"
            icon={FiLock}
          />
          <Input
            onChange={(e) => setNewPassword(e.target.value)} // quando é digitado algo no input ele passa esse valor digitado pro setNewPassword 
            placeholder="Nova Senha"
            type="password"
            icon={FiLock}
          />
        </div>


        <Button title="Salvar" onClick={handleUpdate} // quando acontece o click ele realiza o handle update(salva as alterações)
        /> 
      </Form>
    </Container>
  );
}
