// contexto serve pra separar quais dados são entregues para o usuário de acordo com seu contexto , por exemplo se ele está autenticado(fez login) nos vamos mostrar pra ele as rotas de interação com nossa api, caso ele não esteja logado nos mostramos apenas as rotas de logar ou criar conta

import { createContext, useContext, useState, useEffect } from "react";
// createContext serve pra criarmos um novo contexto para nossa aplicação(nesse caso vai ser o contexo de verificar se o usário está autenticado ou não)
// useContext serve pra podermos usar o nosso contexto aonde o deenvolvedor desejar, esse contexto de autenticação nos permitimos que seja acessado em qualquer lugar da API
// Estado serve para definirmos valores para componentes , e esses componentes vão ser renderizados de acordo com o valor que for passado, e ele não perde esse valor mesmo quando é re-renderizado ou renderizado pela primeira vez.
// useState serve par criarmos uma variavel que guarde valores mesmo quando acontece a renderização, e ela tem a sitaxe dessa maneira:   const [nome, setNome] = useState(ValorDefault);
// useEffect permite que informamos para o react que o componente precisa fazer algo(fazer função) depois que ele for renderizado , e você pode dizer se quer realizar a função apenas quando ele for renderizado pela primeira vez ou sempre

import { api } from "../services/api"; // importa a conexão com nosso backend

export const AuthContext = createContext({}); // cria nosso contexto de autenticação

// função onde fornecemos as informações de autenticação
function AuthProvider({
  children /*Esse children vai ser todas nossas rotas, ou seja todas rotas poderemos acessar os dados dessa function*/,
}) {
  const [data, setData] = useState({}); // cria um estado chamado data que ira guardar os dadosdeautenticação dos usuário, o estado inicial desse estado é um objeto vazio {}

  async function signIn({ email, password }) {
    // função que autentica o usuário(precisa de um email e password como parametro)

    try {
      // tenta fazer o código a baixo

      const response = await api.post("/sessions", { email, password }); // faz um post na rota /sessions do nosso back-end enviando email e senha, e guarda a resposta dessa requisição
      const { user, token } = response.data; // desestrutura o response.data e pega só o token e o user de la

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user)); // cria um item chamado user no local storage e passa os dados do usuário transformando eles em string
      localStorage.setItem("@rocketnotes:token", token); // cria um item chamado token no local storage e envia o token pra la

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`; // configura o header "Authorization"  passando o token de autenticação do usuário assim que ele eentra, e esse header vale pra toda as requisições que formos fazer na nossa api.

      setData({ user, token }); // atualiza o nosso estado data um objeto contendo o user e o token
    } catch (error) {
      // caso der erro faz as linhas abaixp
      if (error.response) {
        alert(error.response.data.message); // caso o erro tenha uma mensagem personalizada ele exibe essa mensagem (alguns erros nos colcamos mnsagens personalizadas no nosso back-end)
      } else {
        alert("Não foi possivel fazer login."); // caso o erro n tenha uma mensagem personalizada mandamos essa mensagem generica
      }
    }
  }

  function signOut() {
    // função para deslogar
    // remove os dados de dentro do local storage
    localStorage.removeItem("@rocketnotes:token");
    localStorage.removeItem("@rocketnotes:user");

    setData({}); // define o nosso estado data como vazio, ou seja remove nosso token de autenticação e isso faz com que o usuário seja redirecionado para as rotas de login ou criar conta
  }

      // função de atualizar informações e foto do user
  async function updateProfile({ user, avatarFile }) { // todas informações do usuário e o arquivo da imagem são passados pela nossa pagina profile

    // função de atualizar informações e foto do user

    try {
      // tenta...

      if (avatarFile) {
        // caso tenha uma foto:
        const fileUploadForm = new FormData(); // cria um objeto form data pra facilitar o upload da igem e garantir que ela seja enviada no formato que o back-end espera

        fileUploadForm.append("avatar", avatarFile); // adiciona a imagem enviada no campo avatar no FOrmFata

        const response = await api.patch("/users/avatar", fileUploadForm); // faz um path para atualizar um camppo especifico que no caso é o avatar, e envia o formulario que recebeu a imagem no campo avatar

        user.avatar = response.data.avatar; // coloca a foto de perfil do user aquela que foi enviada pela resposta da requisição acima
      }

      await api.put("/users", user); // faz um metodo put na rota /users do nosso back-end enviando os novos dados do usuário

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user)); // usa o setItem para atualiza as informações no nosso local storage tambem

      setData({ user, token: data.token }); // atualiza nosso estado passando o mesmo token, pois ele n mudou, e atualiza colocando os novos dados do user
      alert("Perfil atualizado"); // mostra na tela que o perfil foi atualizado
    } catch (error) {
      // caso tenha dado erro:
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possivel atualizar o perfil.");
      }
    }
  }

  useEffect(() => {
    // toda vez que o componente é montado o useEffect faz o código abaixo:

    //    ele pega o token e o user do local storage
    const token = localStorage.getItem("@rocketnotes:token");
    const user = localStorage.getItem("@rocketnotes:user");

    if (token && user) {
      // se caso ele encontre um token e um user

      // ele atualiza nosso token no headers de autenticação
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        //e atualiza nosso estado com as novas informações capturadas do local storage e o user é tranformado em string
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    // retorna o provedor de contexto, passando como value as nossas funções e os dados do user
    <AuthContext.Provider
      value={{
        signIn, // função para autenticar o usuário
        signOut, // função de desautenticar o usuário (deslogar)
        updateProfile, // função de atualizar as infos do usuário 
        user: data.user, // passa os dados do usuário autenticado
      }}
    >
      {children /*renderiza os elementos filhos que terão acesso as funções do nosso contexto que no caso serão todas as nossas rotas*/}
    </AuthContext.Provider>
  );
}

function useAuth() { // serve pra facilitar o uso do nosso contexto encapsulando tudo cque criamos aqui dentro

  // cria uma contant que defini que vamos usar esse nosso AuthContext  
  const context = useContext(AuthContext);

  return context; // retorna esse nosso contexto
}
export { AuthProvider, useAuth };
