import type { TipoUsuario } from "./tipoUsuario";

export type AuthContextType = {
  user: TipoUsuario | null;
  login: (usuario: TipoUsuario) => void;
  logout: () => void;
};
