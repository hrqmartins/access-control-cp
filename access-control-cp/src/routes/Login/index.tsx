import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import type { AuthContextType } from "../../types/tipoContext";
import Error from "../../components/Error/Error";

const LoginPage: React.FC = () => {
  const { login } = useContext(AuthContext) as AuthContextType;
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); 

    try {
      const response = await fetch(
        `http://localhost:3001/usuarios?nomeUsuario=${nomeUsuario}&email=${email}`
      );
      const users = await response.json();

      if (users.length === 1) {
        const user = users[0];
        login(user); 
        navigate("/"); 
      } else {
        setError("Nome de usuário ou email inválidos.");
      }
    } catch (err) {
      setError("Não foi possível conectar ao servidor. Tente mais tarde.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nome de Usuário</label>
          <input
            type="text"
            value={nomeUsuario}
            onChange={(e) => setNomeUsuario(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Digite seu nome de usuário"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Digite seu email"
            required
          />
        </div>

        {error && (
          <div className="mb-4">
            <Error message={error} />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;