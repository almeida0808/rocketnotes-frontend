// contexto serve pra separar quais dados são entregues para o usuário de acordo com seu contexto , por exemplo se ele está autenticado(fez login) nos vamos mostrar pra ele as rotas de interação com nossa api, caso ele não esteja logado nos mostramos apenas as rotas de logar ou criar conta 
// createContext serve pra criarmos um novo contexto para nossa aplicação(nesse caso vai ser o contexo de verificar se o usário está autenticado ou não)
// useContext serve pra podermos usar o nosso contexto aonde o deenvolvedor desejar, esse contexto de autenticação nos permitimos que seja acessado em qualquer lugar da API

// Estado serve para definirmos valores para componentes , e esses componentes vão ser renderizados de acordo com o valor que for passado, e ele não perde esse valor mesmo quando é re-renderizado ou renderizado pela primeira vez.
// useState serve par criarmos uma variavel que guarde valores mesmo quando acontece a renderização, e ela tem a sitaxe dessa maneira:   const [nome, setNome] = useState(ValorDefault);
// useEffect permite que informamos para o react que o componente precisa fazer algo(fazer função) depois que ele for renderizado , e você pode dizer se quer realizar a função apenas quando ele for renderizado pela primeira vez ou sempre
import { createContext, useContext, useState, useEffect } from "react"; 

import { api } from "../services/api"; // importa a conexão com nosso backend




export const AuthContext = createContext({});  // cria um contexto de autenticação 

function AuthProvider({ children }) { 
  const [data, setData] = useState({});  // cria um estado que guarda os dados do usuário e o token de autenticcação

  async function signIn({ email, password }) { 
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      localStorage.setItem("@rocketnotes:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possivel fazer login.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketnotes:token");
    localStorage.removeItem("@rocketnotes:user");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token");
    const user = localStorage.getItem("@rocketnotes:user");

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ 
      signIn,
      signOut, 
      user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
export { AuthProvider, useAuth };
