import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

function PrivateRoute({ children }: { children?: React.ReactNode }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  // const queryKeys = ['me']
  // const {} = useQuery(queryKeys, );
  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
}

export default PrivateRoute;
