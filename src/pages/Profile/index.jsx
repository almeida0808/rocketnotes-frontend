import { Container, Form, Avatar } from "./styles";
import {
  FiLogIn,
  FiMail,
  FiLock,
  FiCamera,
  FiArrowLeft,
  FiUser,
} from "react-icons/fi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://avatars.githubusercontent.com/u/144072612?v=4"
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
          <FiCamera/>
          <input id="avatar" type="file" />
          </label>
        
        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <div id="alterarSenha">
          <Input placeholder="Senha Atual" type="password" icon={FiLock} />
          <Input placeholder="Nova Senha" type="password" icon={FiLock} />
        </div>

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
