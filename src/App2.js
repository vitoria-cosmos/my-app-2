import React, { useState } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React Hooks'
  ]);
  // o valor padrão vai ser vazio
  // setTarefas é a função que vai atualizar a state

  // const [nome, setNome] = useState('Matheus');
  // cria uma state para exibir o nome

  const [input, setInput] = useState('');

  function handleAdd() {
    setTarefas([...tarefas, input])
    setInput('');
    // esse setInput faz com que quando adicionamos uma tarefa, o input fica limpo
  }

  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
        {/* aqui vai mapear cada tarefa e criar cada item da lista */}
      </ul>
      {/* <h1>{nome}</h1> */}
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
      {/* onChange serve para que possamos mudar o valor do input */}
      <button type='button' onClick={handleAdd}>Adicionar</button>

    </div>
  );
}

export default App;
