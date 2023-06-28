import React from 'react'
/* 
Definicion del componente boton, como se crea un boton y cual es la funcionalidad
es EL boton
Requiere 2 parametros
 - value
 - onClick: una funcion
*/
export const Boton = (
  /* Aca defino que parametros requiere el componente */ {value, funcionPorParametro}) =>{

  // Aca se va a ejecuitar la funcion que pasamos por parametro
  const quePasaCuandoClickeoELBoton = () => {
    funcionPorParametro(value);
  }

  return (
    <button className="calculadora-btn" onClick={quePasaCuandoClickeoELBoton}>
      {value}
    </button>
  )
}
