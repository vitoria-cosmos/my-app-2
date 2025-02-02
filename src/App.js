// aula sobre o hook useCallBack
import React, { useState, useEffect, useMemo, useCallBack } from 'react';

function App() {
    const [tarefas, setTarefas] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const tarefasStorage = localStorage.getItem('tarefas');

        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }, [tarefas]);

    // function handleAdd() {
    //     setTarefas([...tarefas, input])
    //     setInput('');
    // }
    const handleAdd = useCallBack(() => {
        setTarefas([...tarefas, input])
        setInput('');
    }, [input, tarefas]) ;
    // input e tarefas são os hooks que estamos utilizando
    // a função handleAdd não vai mais ser chamado ou recriada toda vez que digitamos alguma coisa
    // só vai ser criada ou descartada apenas quando for necessário
    // quando esses hooks forem realmente alterados

    const totalTarefas = useMemo(() => tarefas.length, [tarefas]);
    // com o useMemo a gente não vai se preocupar com a constante atualização que é feita quando estamos fazendo contas, ou algo do tipo,
    // depois do return, pois, o useMemo vai calcular antes do return.

    return (
        <div>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>

                ))}
            </ul>
            <br/>
            <strong>Você tem {totalTarefas} tarefas</strong>
            <br/>
            <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
            <button type='button' onClick={handleAdd}>Adicionar</button>
        </div>
    )
}

export default App;