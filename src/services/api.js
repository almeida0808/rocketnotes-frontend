import axios from "axios"; // permite a coneão com o backend

export const api = axios.create({
  baseURL: "http://localhost:3333", // colocar o endereçõ do backend , lembrando que ele tem que estar rodadndo também
  // tendo um baseURL não precisamos mais informar qual o dominio da nossa API
});
