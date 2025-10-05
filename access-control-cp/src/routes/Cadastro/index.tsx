import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { TipoUsuario } from "../../types/tipoUsuario";

const CadastroPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<TipoUsuario>({ mode: "onTouched" });

  const navigate = useNavigate();

  const onSubmit = async (data: TipoUsuario) => {
    try {
      const response = await fetch(
        `http://localhost:3001/usuarios?nomeUsuario=${data.nomeUsuario}&email=${data.email}`
      );
      const existingUsers = await response.json();

      if (existingUsers.length > 0) {
        setError("root", {
          type: "manual",
          message: "Nome de usuário ou email já cadastrado.",
        });
        return;
      }

      await fetch("http://localhost:3001/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      navigate("/login");
    } catch (err) {
      setError("root", {
        type: "manual",
        message: "Erro no cadastro. Tente novamente mais tarde.",
      });
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-900 text-center mb-6">
          Criar Conta
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Nome completo</label>
              <input
                {...register("nome", {
                  required: "Nome é obrigatório",
                  minLength: { value: 3, message: "Mínimo 3 caracteres" },
                })}
                placeholder="Seu nome"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
              {errors.nome && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nome.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">
                Nome de usuário
              </label>
              <input
                {...register("nomeUsuario", {
                  required: "Nome de usuário é obrigatório",
                  minLength: { value: 3, message: "Mínimo 3 caracteres" },
                })}
                placeholder="seuusuario"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
              {errors.nomeUsuario && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nomeUsuario.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">E-mail</label>
              <input
                {...register("email", {
                  required: "Email é obrigatório",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email inválido",
                  },
                })}
                placeholder="email@exemplo.com"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {errors.root && (
            <p className="text-red-500 text-sm mt-1 text-center">
              {errors.root.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-900 text-white py-2 rounded-md font-semibold hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {isSubmitting ? "Cadastrando..." : "Registrar"}
          </button>
          <div className="text-center text-sm text-gray-500 mt-2">
            Já tem uma conta?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-900 hover:underline cursor-pointer font-medium"
            >
              Fazer login
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroPage;