import { Link } from 'react-router-dom';

export function Cadastro() {
  return (
    <div>
      <h1>Página de Cadastro</h1>
      <p>Já tem uma conta? <Link to="../Login">Faça o login</Link></p>
    </div>
  );
}