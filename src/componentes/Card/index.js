import React, { useState, useRef } from "react";
import "./styles.css";

function Cards(props) {
  
 
  //Pegar a lista
  const [lista, setLista] = useState(props.lista);
  
  //Pegar novo item
  const [novoItem, setNovoItem] = useState("");
  const [itemAlterado, setItemAlterado] = useState("");

//adicionar novo item
  function adicionarNovoItem() {
    if (novoItem === "") {
      alert("vazio");
    } else {
      let listaAntiga = lista;
      listaAntiga.push({
        descricao: novoItem,
        id: lista.length + 1,
        editando: false,
        status: 1,
      });
      setLista(listaAntiga);
      setNovoItem("");
    }
  }
//deletar um item
  function deletarItem(index) {
    let arrTemp = [...lista];
    console.log(index)
    arrTemp.splice(index, 1);

    setLista(arrTemp);
    console.log(arrTemp)
  }
//editar um item
  function editarItem(index) {
     const tempArray = [ ...lista];
    tempArray[index].editando = true;
    // tempArray[index].descricao = itemAlterado;
    setLista(tempArray);
    
    //console.log(tempArray)
    //console.log(lista)
  }

  function salvarEdicao(index) {
    let teste = [ ...lista];
    teste[index].descricao = itemAlterado;
    teste[index].editando = false;
    setLista(teste);
    
  //console.log(teste)
  }

  return (
    <>
      <div className="card">
        
        <div className="entradaDados">
          <input
            type="text"
            value={novoItem}
            onChange={(value) => setNovoItem(value.target.value)}/>
          <button onClick={() => adicionarNovoItem()}> + </button>
        </div>

        {/*CARD*/}
        {
          lista.map((tarefa, index) => (
            <div key={index} className="tarefaCard">
              {
                tarefa.editando 
                ? <input type="text" value={itemAlterado}
                    onChange={(value) => setItemAlterado(value.target.value)} 
                  /> 
                : <p> {tarefa.descricao} | {tarefa.id} </p> 
              }
              <div>
                <button onClick={() => deletarItem(index)}> Deletar </button>
                <button onClick={() => editarItem(index)}> Editar </button>
                <button onClick={() => salvarEdicao(index)}> Salvar </button>
                <button onClick={() => props.proximaColuna(tarefa.status)}> Prox. Passo </button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
  
}

export default Cards;
