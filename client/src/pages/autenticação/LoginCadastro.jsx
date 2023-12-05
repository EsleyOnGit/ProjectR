// components/LoginCadastro.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "./firebase";
//import Cadastro from "./RegistryPage";
import registerImage from "../../images/cad.jpg";
import "./LoginCadastro.css";

const LoginCadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  
  
  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // Login
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login bem-sucedido!");
      } else {
        // Cadastro
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Cadastro bem-sucedido! Agora você pode fazer login.");
      }
    } catch (error) {
      console.error("Erro:", error);

      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        alert("Credenciais inválidas. Verifique seu email e senha.");
      } else if (error.code === "auth/email-already-in-use") {
        alert("Email já cadastrado. Faça login ou use outro email.");
      } else {
        alert(
          "Erro ao processar a autenticação. Consulte o console para obter detalhes."
        );
      }
    }
  };

  return (
    <div className="container">
      <h2>{isLogin ? "Login" : "Cadastro"}</h2>
      <div className='img-container'>
        <img src={registerImage} alt="imagem do cadastro" />
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Joao@email.com"
        />
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha..."
        />
        <button type="submit">{isLogin ? "Login" : "Cadastrar"}</button>
      </form>
      <p>
        {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}
        <Link to="/cadastro" onClick={handleToggle}>
          {isLogin ? "Cadastre-se" : "Faça login"}
        </Link>
      </p>
      </div>
      
    </div>
  );
};

export default LoginCadastro;
