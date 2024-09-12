import React, { useState, useEffect } from 'react';

function App() {
    const [tarefas, setTarefas] = useState([]);

    const [input, setInput] = useState('');

    // Aqui é como se fosse o componentDidMount - ele vai carregar quando o componente já está na tela
    useEffect(() => {
        const tarefasStorage = localStorage.getItem('tarefas');
        // guarda a lista de tarefas em uma variável

        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage));
            // aqui a gente transforma a string em lista novamente
            // e atualiza o estado das tarefas
        }
    }, []);


    // Aqui é como se fosse o componentDidUpdate
    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }, [tarefas]);
    // o useEffect vai monitorar a state tarefas
    // toda vez que a state tarefas for modificada, vai ser chamada a função 
    // a função chamada vai adicionar todas as tarefas no localStorage
    // o stringify é pra transformar a array em string, pois so´é aceito string
    function handleAdd() {
        setTarefas([...tarefas, input]);
        setInput('');
    }

    return (
        <div>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>

            <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
            <button type='button' onClick={handleAdd}>Adicionar</button>
        </div>
    )
}

export default App;

