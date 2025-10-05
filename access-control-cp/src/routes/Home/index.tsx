import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Home: React.FC = () => {
  const ctx = useContext(AuthContext);
  return (
    <div>
      <div>
        <h2>Bem-vindo</h2>

        {ctx?.user ? (
          <div>
            <p>{ctx.user.nome}</p>
            <p >{ctx.user.email}</p>
          </div>
        ) : (
          <p>
            Faça login para ver seus dados.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
