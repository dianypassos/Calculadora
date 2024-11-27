import { useState } from "react";
import * as S from "./style";
//importe tudo como S de nomedoarquivo

export default function App() {
  // primeiroValor é váriavel de estado
  //setPrimeiroValor é a função atualizadora
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  //(e.target.value) é o valor que está sendo digitado dentro do input
  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  return (
    <S.Main>
      <S.GlobalStyle />
      <S.H1>Calculadora</S.H1>
      {/* onChange pra capturar o que o usuário está digitando */}
      <S.Input
        type="number"
        placeholder="Insira um número"
        onChange={capturandoPrimeiroValor}
      />
      <S.Input
        type="number"
        placeholder="Insira um número"
        onChange={capturandoSegundoValor}
      />
      <section>
        <S.Btn onClick={soma}>+</S.Btn>
        <S.Btn onClick={subtracao}>-</S.Btn>
        <S.Btn onClick={multiplicacao}>x</S.Btn>
        <S.Btn onClick={divisao}>/</S.Btn>
      </section>
      <S.Resultado>{resultado}</S.Resultado>
    </S.Main>
  );
}

