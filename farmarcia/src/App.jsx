import { useState } from 'react'
import './App.css'
import Farmarcia from './componets/Farmarcia'
import Pages1 from './componets/Pages1'
import Pages2 from './componets/Pages2'
import Pages3 from './componets/Pages3'
import Pages4 from './componets/Pages4'



function App() {
  const [pagina, setPagina] = useState(<Farmarcia/>)

  return (
    <>

<header>
<img src="farmarcia-logo-pq.png" alt="logo" />
    <p>FARMÁRCIA</p> 
    
<button onClick={() => {(setPagina(<Pages1/>))} } className='page'>ENTRAR</button>
<button onClick={() => {(setPagina(<Pages2/>))} } className='page'>CADASTRAR</button>
<button onClick={() => {(setPagina(<Pages3/>))} } className='page'>SOBRE NÓS</button>
<button onClick={() => {(setPagina(<Pages4/>))} } className='page'>CONTATOS</button>
<button onClick={() => {(setPagina(<Farmarcia/>))} } className='page'>VOLTAR</button>
    </header>
 
   

{pagina}


    </>
  )
}

export default App
