import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  AuthState,
  Entreprise,
  ErrorState,
  Token,
  UserView,
} from "../../types/TypeData";

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      user: null,
      entreprise: null,
      token: null,
      isAuthenticated: false,
      setAuthenticated: (Auth: boolean) => set({ isAuthenticated: Auth }),
      setAuth: (user: UserView, token: Token, entreprise: Entreprise) =>
        set({ user, token, entreprise }),
      clearAuth: () =>
        set({
          user: null,
          token: null,
          entreprise: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-storage",
    },
  ),
);

export const useErrorManagement = create<ErrorState>((set) => ({
  err: null,
  setError: (err: string) => set({ err }),
}));
