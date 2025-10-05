import React from "react";

const Error: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-800 px-3 py-2 rounded-md text-sm">
      {message || "Ocorreu um erro."}
    </div>
  );
};

export default Error;