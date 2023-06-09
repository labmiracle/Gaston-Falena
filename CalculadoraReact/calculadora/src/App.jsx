import { useState } from 'react';
import Boton from './componentes/boton.jsx';
import Pantalla from './componentes/pantalla.jsx';
import BotonClear from './componentes/botonClear.jsx';
import './App.css';
import { evaluate } from 'mathjs';
//Calculacora freeCodeCamp
function App() {
    const [input, setInput] = useState('');

    const agergarInput = valor => {
        setInput(input + valor);
    };
    const calcularResultado = () => {
        if (input) {
            setInput(evaluate(input));
        } else {
            alert('Ingrese valores para realizar los cálculos.');
        }
    };

    return (
        <div className='App'>
            <div className='contenedor-calculadora'>
                <Pantalla input={input} />
                <div className='fila'>
                    <Boton manejarClick={agergarInput}>1</Boton>
                    <Boton manejarClick={agergarInput}>2</Boton>
                    <Boton manejarClick={agergarInput}>3</Boton>
                    <Boton manejarClick={agergarInput}>+</Boton>
                </div>
                <div className='fila'>
                    <Boton manejarClick={agergarInput}>4</Boton>
                    <Boton manejarClick={agergarInput}>5</Boton>
                    <Boton manejarClick={agergarInput}>6</Boton>
                    <Boton manejarClick={agergarInput}>-</Boton>
                </div>
                <div className='fila'>
                    <Boton manejarClick={agergarInput}>7</Boton>
                    <Boton manejarClick={agergarInput}>8</Boton>
                    <Boton manejarClick={agergarInput}>9</Boton>
                    <Boton manejarClick={agergarInput}>*</Boton>
                </div>
                <div className='fila'>
                    <Boton manejarClick={calcularResultado}>=</Boton>
                    <Boton manejarClick={agergarInput}>0</Boton>
                    <Boton manejarClick={agergarInput}>.</Boton>
                    <Boton manejarClick={agergarInput}>/</Boton>
                </div>
                <div className='fila'>
                    <BotonClear manejarClear={() => setInput('')}>
                        Clear
                    </BotonClear>
                </div>
            </div>
        </div>
    );
}

export default App;
