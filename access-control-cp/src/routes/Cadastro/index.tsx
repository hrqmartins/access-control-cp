import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormValues = {
  nome: string;
  nomeUsuario: string;
  email: string;
};

const CadastroPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: "onTouched" });

  const navigate = useNavigate();

  const onSubmit = async (data: FormValues) => {
    try {
      console.log("Cadastrando usuário:", data);
      navigate("/login");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("nome", { type: "manual", message: "Erro no cadastro. Tente novamente." });
    }
  };

  return (
    <div>
      <div>
        <h2>Criar Conta</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <label>Nome completo</label>
              <input
                {...register("nome", {
                  required: "Nome é obrigatório",
                  minLength: { value: 3, message: "Mínimo 3 caracteres" },
                })}
                placeholder="Seu nome"/>
              {errors.nome && (
                <p>{errors.nome.message}</p>
              )}
            </div>
            <div>
              <label>Nome de usuário</label>
              <input
                {...register("nomeUsuario", {
                  required: "Nome de usuário é obrigatório",
                  minLength: { value: 3, message: "Mínimo 3 caracteres" },
                })}
                placeholder="seuusuario"/>
              {errors.nomeUsuario && (
                <p>{errors.nomeUsuario.message}</p>
              )}
            </div>
            <div>
              <label>E-mail</label>
              <input
                {...register("email", {
                  required: "Email é obrigatório",
                  pattern: { value: /\S+@\S+\.\S+/, message: "Email inválido" },
                })}
                placeholder="email@exemplo.com"/>
              {errors.email && (
                <p>{errors.email.message}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}>
            {isSubmitting ? "Cadastrando..." : "Registrar"}
          </button>
          <div>
            Já tem uma conta?{" "}
            <span
              onClick={() => navigate("/login")}>
              Fazer login
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroPage;
