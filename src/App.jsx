// src/App.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";
import  "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const formatarAltura = (valor) => {
    const numeros = valor.replace(/[^\d]/g, "");
    return numeros;
  };

  const handleAlturaChange = (e) => {
    const valorFormatado = formatarAltura(e.target.value);
    setAltura(valorFormatado);
  };

  // eslint-disable-next-line no-unused-vars
  const handlePesoChange = (e) => {
    setPeso(e.target.value);
  };

  const calcularIMC = () => {
    if (!altura || !peso) {
      // Se altura ou peso estiverem vazios, exibir mensagem de erro e sair da função
      alert("Por favor, insira um valor para altura e peso.");
      return;
    }

    const alturaMetros = parseFloat(altura.replace(",", ".")) / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    const imcArredondado = parseFloat(imcCalculado.toFixed(2));
    setImc(imcArredondado);

    if (imcArredondado < 18.5) {
      setClassificacao("Magreza");
    } else if (imcArredondado >= 18.5 && imcArredondado < 25) {
      setClassificacao("Normal");
    } else if (imcArredondado >= 25 && imcArredondado < 30) {
      setClassificacao("Sobrepeso (I)");
    } else if (imcArredondado >= 30 && imcArredondado < 40) {
      setClassificacao("Obesidade (II)");
    } else {
      setClassificacao("Obesidade Grave (III)");
    }
  };

  return (
    <div className="App d-flex align-items-center justify-content-center vh-100">
      <div className="text-center p-5 mb-4 mt-4 bg-info rounded-3">
        <h1>Calculadora de IMC</h1>
        <div>
          <label className="m-0">Altura (cm):</label>
          <input
            className="btn btn-success m-4"
            type="text"
            value={altura}
            onChange={handleAlturaChange}
          />
        </div>
        <div>
          <label className="m-2">Peso (kg):</label>
          <input
            className="btn btn-success m-4"
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <button className="btn btn-outline-info m-4" onClick={calcularIMC}>
          Calcular IMC
        </button>
        {imc !== null && (
          <>
            <div>
              <h2>Seu IMC é : {imc.toFixed(2)}</h2>
              <h4 className="mt-4">Classificação : {classificacao}</h4>
            </div>

            <footer className="footer mt-auto py-3">
              <div className="container text-center">
              </div>
            </footer>
          </>
        )}
      </div>
    </div>
  );
}

export default App;