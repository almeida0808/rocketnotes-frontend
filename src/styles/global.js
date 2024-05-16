import { createGlobalStyle } from "styled-components"; // importa a função que cria estilos globais pra apolicalçao

// roda a função e passamos quais elementos e quais propiedades vamos a configurar globalmente.
export default createGlobalStyle` 

:root{
    font-size: 62.5%;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
    -webkit-font-smoothing: antialised; 


}

body{
    // essa propiedade usa como valor uma cor do nosso arquivo de tema
    background-color:${({ theme }) =>
      theme.COLORS.BACKGROUND_800} ; // observe a sintaxe 
      color:${({ theme }) => theme.COLORS.WHITE} ; 
      font-size: 1.6rem;
}


a{
    text-decoration: none;
}

button, a{
cursor: pointer;
transition: filter 0.2s;
}
button:hover, a:hover{
    filter: brightness(0.8);

}
`;
