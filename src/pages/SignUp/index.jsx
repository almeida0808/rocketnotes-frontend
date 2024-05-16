import { Container, Form, Background } from "./styles";
import { useState } from "react";

import { api } from "../../services/api";

import { FiLogIn, FiMail, FiLock, FiUser } from "react-icons/fi";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", { email, password, name })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/"); // funcção da dom que faz seguir para a rota que for passado como parametro
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel cadastrar!");
        }
      });
  }

  return (
    <Container>
      <Background />

      <Form>
        <div id="title">
          <h1>Rocket Notes</h1>
          <span>Aplicação para salvar e gerenciar seus links úteis.</span>
        </div>

        <h2>Crie sua Conta</h2>
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Cadastrar" onClick={handleSignUp}></Button>

        <Link to="/">Volte para o login</Link>
      </Form>
    </Container>
  );
}
