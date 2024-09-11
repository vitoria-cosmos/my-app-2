import React, { useState } from 'react';
import './style01.css';

function App() {

    // Declarar uma nova variável de state, na qual chamaremos de "contador"
    const [contador, setContador] = useState(0);

    return (
        <div className='container'>
            <div className='container_card'>
                <p className='container_p'>You cliked {contador} times</p>
                <button onClick={() => setContador(contador + 1)} className='container_button'>
                    Aumentar
                </button>
            </div>
            
        </div>
    );

}

export default App;