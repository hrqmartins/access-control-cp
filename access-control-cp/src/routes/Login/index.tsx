import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div>
      <h1>Página de Login</h1>
      <p>Não tem uma conta? <Link to="../Cadastro">Cadastre-se</Link></p>
    </div>
  );
}