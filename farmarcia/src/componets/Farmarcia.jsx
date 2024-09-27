import { useState } from 'react'
import Pages1 from './Pages1'
import Pages2 from './Pages2'
import Pages3 from './Pages3'
import Pages4 from './Pages4'

function Farmarcia() {
  const [pagina, setPagina] = useState()


  return (
    <div>
   
    <header>
    
  
    
    </header>
 
    <h1>SEJA BEM-VINDO A FARMÁRCIA</h1>
 <h2>À NOVA ERA DA SAÚDE!</h2>
<h3>
   Temos Novas Notícias! </h3>
<h4>Estamos animados em anunciar que a Farmácia [FARMARIO] agora é a Farmácia [FARMÁRCIA]! </h4>
<h4>Mudamos para melhor, sempre pensando em você e na sua saúde.</h4>

<h3>
  Nova Direção, Novos Produtos!
  </h3>
<h4>
  Sob a nova direção de [Márcia], estamos trazendo uma seleção incrível de produtos e serviços para atender todas <br /> as suas necessidades de saúde e bem-estar. Desde medicamentos a cuidados pessoais, temos tudo que você precisa!
  </h4>












{pagina}
</div>

)
}

export default Farmarcia




