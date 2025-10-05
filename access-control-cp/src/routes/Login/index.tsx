import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const { login } = useContext(AuthContext);
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    login({ nome: nomeUsuario, email });

    navigate("/");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div>
          <label>Nome</label>
          <input type="text" value={nomeUsuario} onChange={(e) => setNomeUsuario(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Digite seu nome" required/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" required/>
        </div>
        <button type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
