import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import Login from "./routes/Login";
import Cadastro from "./routes/Cadastro";
import Home from "./routes/Home";
import ErrorPage from "./routes/Error";
import { AuthProvider } from "./context/AuthContext";
import RotaPV from "./context/RotaPV";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Cabecalho />
          <main className="flex-1 container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<RotaPV><Home /></RotaPV>} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/404" element={<ErrorPage />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </main>
          <Rodape />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
