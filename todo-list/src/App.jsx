import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [listado, actualizarListado] = useState([]);
  let [textoInput, actualizarTextoInput] = useState("");

  function capturarEventoOnChange(evento) {
    actualizarTextoInput(evento.target.value);

  }

  const listaNueva = listado.length;

  function capturarEventoOnClickAgregar() {

    if (textoInput.length > 0) {

      let listaNueva = Array.from(listado);
      listaNueva.push(textoInput);
      limpiarInput(); 
      actualizarListado(listaNueva);

    }

  } 
  function limpiarInput() {

    actualizarTextoInput('');
  }
function capturarEventoOnKeyDown(evento) {
if (evento.key=="Enter"){if (textoInput.length > 0) {

  let listaNueva = Array.from(listado);
  listaNueva.push(textoInput);
  actualizarListado(listaNueva);
  limpiarInput( )
}}

}

function capturarEventoOnclickEliminar(index){
  let listaNueva = Array.from(listado);
listaNueva.splice(index, 1); 
actualizarListado(listaNueva);
}

  return (
    <>
      <h1>Todo List</h1>
      <input onChange={capturarEventoOnChange} value={textoInput} onKeyDown={capturarEventoOnKeyDown} placeholder={listaNueva===0 ? "No hay tareas, añadir tareas" :null} type="text" />
      <button onClick={capturarEventoOnClickAgregar}> Agregrar item</button> 

      <ul className='lista'>
      {
  listado.map((item, index) => {
    return ( 
      <div className='recuadro'>
      <li className='lista2' key={index}>
        {item} 
        <span 
          className="delete-icon" 
          onClick={() => capturarEventoOnclickEliminar(index)}
        >
          <i className="fas fa-xmark equis"></i>
        </span>
      </li> 
      </div>
    );
  })
}
      </ul>
    </>
  )
}

export default App
