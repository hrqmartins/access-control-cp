import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Cabecalho: React.FC = () => {
  const ctx = useContext(AuthContext);

  return (
    <header>
      <div>
        <Link
          to="/">
          Access Control CP
        </Link>
      </div>
      <div>
        {ctx?.user ? (
          <>
            <div>
              <div>{ctx.user.nome}</div>
              <div>{ctx.user.email}</div>
            </div>
            <button
              onClick={() => ctx.logout()}>
              Sair
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login">
              Login
            </Link>
            <Link
              to="/cadastro">
              Cadastro
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Cabecalho;
