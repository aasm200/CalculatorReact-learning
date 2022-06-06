import './App.css';
import FreeCodeCamp_logo from '../src/img/FreeCodeCamp_logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import  { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState(''); 

  const calcularResultado = () =>{
    
   if(input) {
    setInput(evaluate(input));
   } else {
     alert("ingresa valores");  
   }
   
  };

  const agregarInput = val => {
    setInput(input + val);
  };


  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img   
          src={FreeCodeCamp_logo}
          alt='Logo freeCodeCaamp'
          className='freeCodeCamp-logo' /> 
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClicks={agregarInput}>1</Boton>
          <Boton manejarClicks={agregarInput}>2</Boton>
          <Boton manejarClicks={agregarInput}>3</Boton>
          <Boton manejarClicks={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClicks={agregarInput}>4</Boton>
          <Boton manejarClicks={agregarInput}>5</Boton>
          <Boton manejarClicks={agregarInput}>6</Boton>
          <Boton manejarClicks={agregarInput}>-</Boton>

        </div>
        <div className='fila'>
          <Boton manejarClicks={agregarInput}>7</Boton>
          <Boton manejarClicks={agregarInput}>8</Boton>
          <Boton manejarClicks={agregarInput}>9</Boton>
          <Boton manejarClicks={agregarInput}>*</Boton>

       </div>
        <div className='fila'>
          <Boton manejarClicks={calcularResultado}>=</Boton>
          <Boton manejarClicks={agregarInput}>0</Boton>
          <Boton manejarClicks={agregarInput}>.</Boton>
          <Boton manejarClicks={agregarInput}>/</Boton>

       </div>
      
        <div className='fila'>
           <BotonClear manejarClear={()=>setInput('')}> 
             Clear
           </BotonClear>
      </div> {/* div cierra contenedor calculadora */}
    </div>


  </div>
  );
}

export default App;
