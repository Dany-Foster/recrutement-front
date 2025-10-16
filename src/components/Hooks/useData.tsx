import { useContext } from "react";
import AuthContext from "./Authentification.context";

export const useData = () => {
  const context = useContext(AuthContext);
  if (!context || context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
