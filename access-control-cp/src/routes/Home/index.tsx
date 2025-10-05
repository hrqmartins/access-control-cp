import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Home: React.FC = () => {
  const ctx = useContext(AuthContext);
  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-start p-8 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Bem-vindo</h2>

        {ctx?.user ? (
          <div className="flex flex-col gap-1">
            <p className="font-medium">{ctx.user.nome}</p>
            <p className="text-sm text-gray-600">{ctx.user.email}</p>
          </div>
        ) : (
          <p className="text-sm text-gray-600">
            Faça login para ver seus dados.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
