import React, { useState } from 'react'; 
import './style.css';

function Coluna (props) {

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
    }
  //editar um item
    function editarItem(index) {
        setItemAlterado("");
        const tempArray = [ ...lista];
        tempArray[index].editando = true;
        setLista(tempArray);
    }
  
    function salvarEdicao(index) {
      let teste = [ ...lista];
      teste[index].descricao = itemAlterado;
      teste[index].editando = false;
      setLista(teste);
    }

    function proximaColuna(index) {
        const tempArray = [ ...lista];
        if(tempArray[index].status != 3) {
            tempArray[index].status += 1;
        }
        setLista(tempArray);
    }
    function colunaAnterior(index) {
        const tempArray = [ ...lista];
        if(tempArray[index].status != 1) {
            tempArray[index].status -= 1;
        }
        setLista(tempArray);
    }
    return (
        <>
            <section className="colunas">
                <div className="coluna coluna1">
                    <h3>📝 To Do</h3>
                    <div className="entradaDados">
                        <input
                            type="text"
                            value={novoItem}
                            onChange={(value) => setNovoItem(value.target.value)}/>
                        <button onClick={() => adicionarNovoItem()}> + </button>
                    </div>
                    {
                        lista.map((tarefa, index) => (
                            tarefa.status === 1 
                            ?
                                <div key={index} className="tarefaCard">
                                    <span className='identificador'>{tarefa.id}</span>
                                    {
                                        tarefa.editando 
                                        ?
                                        <> 
                                            <input type="text" value={itemAlterado}
                                                onChange={(value) => setItemAlterado(value.target.value)} 
                                            /> 
                                            <button onClick={() => salvarEdicao(index)}> Salvar </button>
                                        </>
                                        : <p> {tarefa.descricao}</p> 
                                    }
                                    <div>
                                        <button onClick={() => colunaAnterior(index)}> {'<'} </button>
                                        {
                                            tarefa.editando 
                                            ? null
                                            : <button onClick={() => editarItem(index)}> Editar </button>
                                        }
                                        <button onClick={() => deletarItem(index)} className='botaoDeletar'> Deletar </button>
                                        <button onClick={() => proximaColuna(index)}> {'>'} </button>

                                    </div>
                                </div>
                            : null
                        ))
                    }
                
                </div>
                <div className="coluna coluna2">
                    <h3>💻 In Progress</h3>
                    {
                        lista.map((tarefa, index) => (
                            tarefa.status === 2
                            ?
                                <div key={index} className="tarefaCard">
                                    <span className='identificador'>{tarefa.id}</span>
                                    {
                                        tarefa.editando 
                                        ?
                                        <> 
                                            <input type="text" value={itemAlterado}
                                                onChange={(value) => setItemAlterado(value.target.value)} 
                                            /> 
                                            <button onClick={() => salvarEdicao(index)}> Salvar </button>
                                        </>
                                        : <p> {tarefa.descricao}</p> 
                                    }
                                    <div>
                                        <button onClick={() => colunaAnterior(index)}> {'<'} </button>
                                        {
                                            tarefa.editando 
                                            ? null
                                            : <button onClick={() => editarItem(index)}> Editar </button>
                                        }
                                        <button onClick={() => deletarItem(index)} className='botaoDeletar'> Deletar </button>
                                        <button onClick={() => proximaColuna(index)}> {'>'} </button>

                                    </div>
                                </div>
                            : null
                        ))
                    }
                
                </div>
                <div className="coluna coluna3">
                    <h3>🚀 Done</h3>
                    {
                        lista.map((tarefa, index) => (
                            tarefa.status === 3 
                            ?
                                <div key={index} className="tarefaCard">
                                    <span className='identificador'>{tarefa.id}</span>
                                    {
                                        tarefa.editando 
                                        ?
                                        <> 
                                            <input type="text" value={itemAlterado}
                                                onChange={(value) => setItemAlterado(value.target.value)} 
                                            /> 
                                            <button onClick={() => salvarEdicao(index)}> Salvar </button>
                                        </>
                                        : <p> {tarefa.descricao} </p> 
                                    }
                                    <div>
                                        <button onClick={() => colunaAnterior(index)}> {'<'} </button>
                                        {
                                            tarefa.editando 
                                            ? null
                                            : <button onClick={() => editarItem(index)}> Editar </button>
                                        }
                                        <button onClick={() => deletarItem(index)} className='botaoDeletar'> Deletar </button>
                                        <button onClick={() => proximaColuna(index)}> {'>'} </button>

                                    </div>
                                </div>
                            : null
                        ))
                    }
            
                </div>
            </section>

        </>
    )
}

export default Coluna;