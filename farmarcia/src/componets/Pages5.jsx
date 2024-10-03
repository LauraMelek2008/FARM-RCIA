import { useState } from 'react'

function Pages5() {

    const [fila, setFila] = useState([]);
  const [senhaAtual, setSenhaAtual] = useState('');

  const gerarSenha = (tipo) => {
    const novoNumero = fila.filter(s => s.tipo === tipo).length + 1;
    const novaSenha = { tipo, numero: novoNumero };
    setFila([...fila, novaSenha]);
  };

  const chamarSenha = () => {
    if (fila.length === 0) {
      return;
    }

    // Separar as senhas preferenciais e normais
    const preferenciais = fila.filter(s => s.tipo === 'Preferencial');
    const normais = fila.filter(s => s.tipo === 'Normal');

    let senhaChamando;

    if (preferenciais.length > 0) {
      // Chama a senha preferencial com o menor número
      senhaChamando = preferenciais.reduce((prev, curr) => (prev.numero < curr.numero ? prev : curr));
    } else if (normais.length > 0) {
      // Chama a senha normal com o menor número
      senhaChamando = normais.reduce((prev, curr) => (prev.numero < curr.numero ? prev : curr));
    }

    // Atualiza a fila removendo a senha chamada
    setFila(fila.filter(s => s !== senhaChamando));
    setSenhaAtual(`Senha chamada: ${senhaChamando.tipo} ${senhaChamando.numero}`);
  };

  return (
    <div>
      <header>
    
  
    
    </header>

      <div style={{ padding: '20px' }}> &nbsp; &nbsp;
      <h1>Sistema de Senhas - Farmárcia</h1> &nbsp; &nbsp; &nbsp;
      <div> &nbsp; &nbsp; &nbsp;
        <button className='pageU' onClick={() => gerarSenha('Normal')}
         >Gerar Senha Normal</button> &nbsp; &nbsp;
        <button className='pageU' onClick={() => gerarSenha('Preferencial')}>Gerar Senha Preferencial</button> &nbsp; &nbsp;
        <button className='pageU' onClick={chamarSenha}>Chamar Senha</button> &nbsp; &nbsp; &nbsp;
      </div>
      &nbsp; &nbsp;
      <h2 >{senhaAtual}</h2> &nbsp; &nbsp;
      <h3>Fila:</h3> &nbsp; &nbsp;
      <ul className='um'> &nbsp; &nbsp;
        {fila.map((senha, index) => (
          <li key={index}>{`${senha.tipo} ${senha.numero}`}</li>
        ))}
      </ul> &nbsp; &nbsp;
      {fila.length === 0 && <p className='uma'>A fila está vazia.</p>}
    </div>

    </div>
  )
}

export default Pages5
