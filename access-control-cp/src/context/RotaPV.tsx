import React, { type JSX } from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

type Props = { children: JSX.Element };

const RotaPV: React.FC<Props> = ({ children }) => {
  const ctx = useContext(AuthContext);
  if (!ctx) return <Navigate to="/login" replace />;
  const { user } = ctx;
  return user ? children : <Navigate to="/login" replace />;
};

export default RotaPV;
