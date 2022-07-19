import "./App.css";
import Coluna from "./componentes/Coluna";
import React, { useState } from "react";

const cards = [
  {
    descricao: "teste ",
    id: 1,
    editando: false,
    status: 1,
  },
  {
    descricao: "testando",
    id: 2,
    editando: false,
    status: 1,
  },
  {
    descricao: "testando1",
    id: 3,
    editando: false,
    status: 3,
  },
  {
    descricao: "testando2",
    id: 4,
    editando: false,
    status: 2,
  }
];

function App() {
  const [lista, setLista] = useState(cards);
  console.log(lista)


  return (
    <div className="App">
      <h1>Kanban do Projeto</h1>
      <Coluna lista={lista} />
    </div>
  );
}

export default App;
