import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Cabecalho: React.FC = () => {
  const ctx = useContext(AuthContext);

  return (
    <header className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="font-bold text-lg tracking-wide hover:text-yellow-300 transition-colors"
        >
          Access Control CP
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {ctx?.user ? (
          <>
            <div className="text-right">
              <div className="font-medium">{ctx.user.nome}</div>
              <div className="text-sm text-blue-200">{ctx.user.email}</div>
            </div>
            <button
              onClick={() => ctx.logout()}
              className="bg-white text-blue-900 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Sair
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-3 py-1 rounded-md text-sm font-medium border border-white hover:bg-white hover:text-blue-900 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/cadastro"
              className="px-3 py-1 rounded-md text-sm font-medium bg-white text-blue-900 hover:bg-yellow-400 hover:text-white transition-colors"
            >
              Cadastro
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Cabecalho;
