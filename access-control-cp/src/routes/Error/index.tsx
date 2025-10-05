import React from "react";

const ErrorPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mt-8 text-center">
      <h1 className="text-2xl font-bold mb-4">404 - Página não encontrada</h1>
      <p className="text-gray-600">Verifique a URL ou volte para a página inicial.</p>
    </div>
  );
};

export default ErrorPage;