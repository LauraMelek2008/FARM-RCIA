import { useState } from 'react'
import './App.css'
import Farmarcia from './componets/Farmarcia'
import Pages1 from './componets/Pages1'
import Pages2 from './componets/Pages2'
import Pages3 from './componets/Pages3'
import Pages4 from './componets/Pages4'
import Pages5 from './componets/Pages5'



function App() {
  const [pagina, setPagina] = useState(<Farmarcia/>)

  
  return (
    <>

<header>
<img src="farmarcia-logo-pq.png" alt="logo" />
    <p>FARMÁRCIA</p>  &nbsp; &nbsp; &nbsp;
    
<button onClick={() => {(setPagina(<Pages1/>))} } className='page'>ENTRAR</button> &nbsp; &nbsp; &nbsp;
<button onClick={() => {(setPagina(<Pages2/>))} } className='page'>CADASTRAR</button> &nbsp; &nbsp; &nbsp;
<button onClick={() => {(setPagina(<Pages3/>))} } className='page'>SOBRE NÓS</button> &nbsp; &nbsp; &nbsp;
<button onClick={() => {(setPagina(<Pages4/>))} } className='page'>CONTATOS</button> &nbsp; &nbsp; &nbsp;
<button onClick={() => {(setPagina(<Pages5/>))} } className='page'>SENHAS</button> &nbsp; &nbsp; &nbsp;
<button onClick={() => {(setPagina(<Farmarcia/>))} } className='page'>VOLTAR</button>
    </header>

   
   

{pagina}


    </>
  )
}

export default App
