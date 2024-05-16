import { Container, Form, Background } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { useContext } from "react";

import { MyContext } from "../../myContext";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { TextButton } from "../../components/text-button";

import { Link } from "react-router-dom";

export function SignIn() {
const data = useContext( MyContext)
console.log("MEU contexto => ",data)

  return (
    <Container>
      <Form>
        <div id="title">
          <h1>Rocket Notes</h1>
          <span>Aplicação para salvar e gerenciar seus links úteis.</span>
        </div>

        <h2>Faça seu Login</h2>
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar"></Button>

        <Link to="/register">Criar Conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
