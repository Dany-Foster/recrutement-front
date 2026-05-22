import { Toast } from "@base-ui/react";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useMe } from "../Hooks/useAuth";
import PageTransition from "../PageTransition";
import { useAuthStore } from "../store/useAuthStore";

function PrivateRoute({ children }: { children?: React.ReactNode }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const { mutate: verifyToken, isError, isPending } = useMe();
  const ToastManager = Toast.useToastManager();

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  if (isError) {
    ToastManager.add({
      title: "Session expirée",
      description: "Veuillez vous reconnecter.",
    });
  }

  return isAuthenticated ? (
    <PageTransition loading={isPending}>{children}</PageTransition>
  ) : (
    <Navigate to="/" />
  );
}

export default PrivateRoute;
