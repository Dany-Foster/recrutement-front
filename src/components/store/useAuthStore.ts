import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  AuthState,
  Entreprise,
  ErrorState,
  UserView,
} from "../../types/TypeData";

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      user: null,
      entreprise: null,
      access: null,
      refresh: null,
      isValidTokenAccess: false,
      isAuthenticated: false,
      setAuthenticated: (Auth: boolean) => set({ isAuthenticated: Auth }),
      setIsValidTokenAccess: (isValid: boolean) =>
        set({ isValidTokenAccess: isValid }),
      setAuth: (
        user: UserView,
        access: string,
        refresh: string,
        entreprise: Entreprise,
      ) => set({ user, access, refresh, entreprise, isValidTokenAccess: true }),
      clearAuth: () =>
        set({
          user: null,
          access: null,
          refresh: null,
          isValidTokenAccess: false,
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
  utilisateur: null,
  authentification: null,
  login: null,
  register: null,
  setError: (state: Partial<ErrorState>) => set((s) => ({ ...s, ...state })),
}));
