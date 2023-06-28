import React from 'react'
import "../assets/style.css"
import { Input } from '../components/Input'
import { Boton } from '../components/Boton'
import { useState } from 'react'

export const Calculadora = () => {

  const [valorAIzquierdaOperacion, setVAIO] = useState(0) // Esta variable guarda EN FORMATO NUMERO 
                                                          // (entonces lo vas a tener que parsear de string a numero) 
                                                          // todo lo que esta a la izquierda de la operacion (+ - *) porque = es la operacion final
  const [valorOperacion, setValorOperacion] = useState(null) // Esta variable va a guardar como string el valor de la operacion + - * y va a ser tu
                                                              // indicacion para dividir valorIzq y valorDer
  const [valorADerechaOperacion, setVADO] = useState(null) // Idem izquiera pero a la der de la operacion --> Esta variable te es necesaria para finalizar el calculo
                                                           // No podes usar el = si esta variable esta en null
                                                           // Cuando ejecutes un calculo y resetees las variables, es importante que esta resetee a null

  /* 
    Funcion que llama el handleClick cuando corresponde, agrega numero a valorIzq o valorDer cuando corresponde
  */
  const handleAgregarNumber = (valor) => {}

  /*
    Funcion que llama el handleClick cuando corresponde, agrega valorOperacion
    Validaciones: Estan en la def de handleClick
  */
  const handleAgregarOperacion = (valor) => {}
  
  /*
    Funcion que se ejcuta cuando =
  */
  const calcular = () => {}
  
  /*
    Esta funcion es el click general de cada boton, aca tenes que definir en base a los valores de las variables ya guardados y
    lo que recibis como 'valor' por parametro en esta funcion, que sub-funcion ejectutar
    Posibles func a ejecutar (dividimos los casos segun si ingresa un numero o un string):
      agregarNumbero (aca vas a evaluar si va a valorIzq o valorDer)
      agregarOperacion (caso string: Aca evaluas que operacion es:
        - Primer distincion, es = o no (funcion calcular)
          - Segunda distincion, hay valorIzq (funcion handleAgregarOperacion)
          - Tercera d, hay valorOperacion (funcion handleAgregarOperacion)
          - Cuarta d, hay valorIzq, valorOper, valorDer (funcion handleAgregarOperacion)
          Esto con un switch case
      )

  */
  const handleClickGeneral = (valor) => {
    console.log("el boton apretado fue " + valor)
  }
  
  const items = [0,1,2,3,4,5,6,7,8,9,"+","-","/","x","=","C"];


  return (
    <div className="calculadora">
      <Input/>
        <div className="contenedor-items">
          {items.map((item, index) => {
              return <Boton 
              // Aca le paso los parametros que requiere --> Formato izq parametro que pide, derecha valor que vos le pasas 
                value={item} 
                funcionPorParametro={handleClickGeneral}
                key={`boton-calculadora-${index}`} />
          })}
        </div> 
    </div>
  )
};