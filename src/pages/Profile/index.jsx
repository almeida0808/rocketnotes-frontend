import { useState } from "react";
import { useAuth } from "../../hooks/auth";

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
  const { user } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [OldPassword, setOldPassword] = useState();
  const [PasswordNew, setPasswordNew] = useState();

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
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />
        <div id="alterarSenha">
          <Input onChange={e => setOldPassword(e.target.value)} placeholder="Senha Atual" type="password" icon={FiLock} />
          <Input onChange={e => setPasswordNew(e.target.value)} placeholder="Nova Senha" type="password" icon={FiLock} />
        </div>

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
