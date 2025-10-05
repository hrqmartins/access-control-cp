import React, { createContext, useState, useEffect } from "react";
import type { AuthContextType } from "../types/tipoContext";
import type { TipoUsuario } from "../types/tipoUsuario";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<TipoUsuario | null>(() => {
    try {
      const raw = localStorage.getItem("access-control-user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem("access-control-user", JSON.stringify(user));
    else localStorage.removeItem("access-control-user");
  }, [user]);

  const login = (usuario: TipoUsuario) => setUser(usuario);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};