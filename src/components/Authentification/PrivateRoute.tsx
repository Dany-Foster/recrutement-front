import { Toast } from "@base-ui/react";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useMe, useRefreshToken } from "../Hooks/useAuth";
import PageTransition from "../PageTransition";
import { useAuthStore, useErrorManagement } from "../store/useAuthStore";

function PrivateRoute({ children }: { children?: React.ReactNode }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const isValidTokenAccess = useAuthStore((s) => s.isValidTokenAccess);
  const { mutate: verifyToken, isError, isPending } = useMe();
  const { mutate: RefreshToken } = useRefreshToken();
  const authError = useErrorManagement((s) => s.authentification);
  const ToastManager = Toast.useToastManager();

  useEffect(() => {
    if (!isValidTokenAccess && isAuthenticated) {
      RefreshToken();
    } else {
      verifyToken();
    }
  }, [isAuthenticated, isValidTokenAccess]);

  useEffect(() => {
    if (authError) {
      ToastManager.add({
        title: "Problème d'authentification",
        description: authError?.message,
      });
    }
    useErrorManagement.setState({ authentification: null });
  }, [isError]);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <PageTransition loading={isPending}>{children}</PageTransition>;
}

export default PrivateRoute;
