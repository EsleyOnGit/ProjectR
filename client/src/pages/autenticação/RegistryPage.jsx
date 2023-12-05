// Cadastro.js
import React, { useState } from 'react';
import './style.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './firebase';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  //const [dNascimento, setDNascimento] = useState('');
  //const [endereco, setEndereco] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Limpar os campos após o envio
    setNome('');
    setEmail('');
    setSenha('');
  };
  

const [SingnInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

function handleSingin(e) {
    e.preventDefault();
    SingnInWithEmailAndPassword(email, senha);
}



if (loading) {
    return <h5>Carregando...</h5>;
}

if(user){
    return console.log(user);
}
if(error){
    return( <p>confira no console o que houve</p>,
    console.log(error)
    )
}

  return (
    <div className='principal'>
        <div className='direita'>
            <h2>Cadastro</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                    Nome:
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    </label>
                    <br />
                    <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </label>
                    <br />
                    <label>
                    Senha:
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    </label>
                    <br />
                    <button type="submit" onClick={handleSingin}>Cadastrar</button>
                </form>
        </div>
    </div>
  );
};

export default Cadastro;
