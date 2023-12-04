// Cadastro.js
import React, { useState } from 'react';
import './style.css';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dNascimento, setDNascimento] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Lógica de envio dos dados para o servidor
    console.log('Dados a serem enviados:', { nome, email, senha });

    // Limpar os campos após o envio
    setNome('');
    setEmail('');
    setSenha('');
    setDNascimento('');
    setEndereco('');
  };

  return (
    <div>
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
        <label>
          Data de nascimento:
          <input
            type="number"
            value={dNascimento}
            onChange={(e) => setDNascimento(e.target.value)}
          />
        </label>
        <label>
          endereço:
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
