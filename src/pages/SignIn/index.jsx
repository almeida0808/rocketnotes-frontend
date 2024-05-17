import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { useState } from "react";

import {useAuth} from "../../hooks/auth"

import { Input } from "../../components/input";
import { Button } from "../../components/button";

import { Link } from "react-router-dom";

export function SignIn() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const {signIn} = useAuth()

function handleSignIn(){
signIn({email,password})

}

  return (
    <Container>
      <Form>
        <div id="title">
          <h1>Rocket Notes</h1>
          <span>Aplicação para salvar e gerenciar seus links úteis.</span>
        </div>

        <h2>Faça seu Login</h2>
        <Input onChange={e => setEmail(e.target.value)} placeholder="E-mail" type="text" icon={FiMail} />
        <Input onChange={e => setPassword(e.target.value)} placeholder="Senha" type="password" icon={FiLock} />

        <Button onClick={handleSignIn} title="Entrar"/>

        <Link to="/register">Criar Conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
