import styled, { createGlobalStyle } from "styled-components";

//pra usar o reset precisamos importar essa funcionalidade

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: borderbox;
}
`;

export const Main = styled.main`
  background-color: black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Orbitron", sans-serif;
`;

export const H1 = styled.h1`
  color: #009d14;
`;

export const Input = styled.input`
  width: 20vw;
  border: none;
  border-radius: 20px;
  padding: 10px;
  margin: 8px;
  border: #009d14 solid 2px;

  &::placeholder {
    color: black;
    text-align: center;
  }
`;

export const Btn = styled.button`
  border: none;
  padding: 10px 15px;
  color: black;
  border-radius: 5px;
  margin: 5px;
  background-color: white;

  &:hover {
    background-color: #e8e8e8;
    color: #009d14;
    border: #009d14 solid 1px;
    cursor: pointer;
  }
`;

export const Resultado = styled.h3`
  border-radius: 50%;
  padding: 10px;
  color: #009d14;
  margin: 10px;
`;
