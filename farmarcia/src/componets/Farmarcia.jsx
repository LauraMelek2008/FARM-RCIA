import React from 'react'

function Farmarcia() {
  const [pagina, setPagina] = useState(<Farmarcia/>)


  return (
    <div>
   
    <header>
    <img src="farmarcia-logo-pq.png" alt="logo" />
    <p>FARMÁRCIA</p>
    <button onClick={() => {(setPagina(<Pages1/>))} }></button>
    <button onClick={() => {(setPagina(<Pages2/>))} }></button>
    <button onClick={() => {(setPagina(<Pages3/>))} }></button>
    <button onClick={() => {(setPagina(<Pages4/>))} }></button>
    

    </header>
 
    </div>
  )
}

export default Farmarcia
