import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  ErrorResponses,
  InscrPlayload,
  InscrResponse,
  LoginPlayload,
  LoginResponse,
} from "../../types/TypeData";
import { api } from "../API/ApiManagement";
import { useAuthStore, useErrorManagement } from "../store/useAuthStore";

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation<LoginResponse, AxiosError<ErrorResponses>, LoginPlayload>({
    mutationFn: async ({ email, password }) =>
      await api.post("api/login/", { email, password }),
    onSuccess: ({ user, access, refresh, entreprise }: LoginResponse) => {
      useAuthStore.getState().setAuth(user, access, refresh, entreprise);
      useAuthStore.setState({
        isAuthenticated: true,
      });
      queryClient.invalidateQueries();
    },
    onError: (err) => {
      if (err.response) {
        useErrorManagement.getState().setError({
          authentification: {
            status: err.response.status,
            message: err.response.data.detail,
          },
        });
      }
      queryClient.invalidateQueries();
    },
  });
};

export const useInscription = () => {
  const queryClient = useQueryClient();
  return useMutation<InscrResponse, AxiosError<ErrorResponses>, InscrPlayload>({
    mutationFn: async ({ user, entreprise }) =>
      await api.post("api/inscription/", { user, entreprise }),
    onSuccess: ({ user, access, refresh, entreprise }: InscrResponse) => {
      useAuthStore.getState().setAuth(user, access, refresh, entreprise);
      useAuthStore.setState({
        isAuthenticated: true,
      });
      queryClient.invalidateQueries();
    },
    onError: (err) => {
      if (err.response) {
        console.log(err.response);
        useErrorManagement.getState().setError({
          authentification: {
            status: err.response.status,
            message: err.response.data.error,
          },
        });
        if (err.response.data.detail) {
          console.log(err.response.data.detail);
        }
      }

      queryClient.invalidateQueries();
    },
  });
};

export const useMe = () => {
  const queryClient = useQueryClient();
  const access_token = useAuthStore.getState().access;
  return useMutation<void, AxiosError<ErrorResponses>, void>({
    mutationFn: async () =>
      await api.post(
        "api/token/verify/",
        access_token ? { token: access_token } : { token: "no_token" },
      ),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (err) => {
      if (err.response?.status === 401) {
        if (useAuthStore.getState().access) {
          useAuthStore.setState({ isValidTokenAccess: false });
        } else {
          useErrorManagement.getState().setError({
            authentification: {
              message: "Veuillez vous connecter pour accéder au dashboard",
              status: err.response.status,
            },
          });
          useAuthStore.getState().clearAuth();
        }
        if (err.response.data.detail) {
          console.log(err.response.data.detail);
        }
      }
      queryClient.invalidateQueries();
    },
  });
};

export const useRefreshToken = () => {
  const queryClient = useQueryClient();
  const refresh_token = useAuthStore.getState().refresh;
  return useMutation<void, AxiosError<ErrorResponses>, void>({
    mutationFn: async () =>
      await api.post(
        "api/token/refresh/",
        refresh_token ? { refresh: refresh_token } : { refresh: "no_token" },
      ),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (err) => {
      if (err.response?.status === 401) {
        useErrorManagement.getState().setError({
          authentification: {
            message: "Votre session a expiré. Veuillez vous reconnecter.",
            status: err.response.status,
          },
        });
        useAuthStore.getState().clearAuth();
      }
      queryClient.invalidateQueries();
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const refresh_token = useAuthStore.getState().refresh;
  return useMutation<void, AxiosError<ErrorResponses>, void>({
    mutationFn: async () => {
      await api.post(
        "api/logout/",
        refresh_token ? { refresh: refresh_token } : {},
      );
    },
    onSuccess: () => {
      useAuthStore.getState().clearAuth();
      queryClient.invalidateQueries();
    },
    onError: (err) => {
      if (err.response) {
        useErrorManagement.setState({
          authentification: {
            message: err.response.data.error,
            status: err.response.status,
          },
        });
        if (err.response.data.detail) {
          console.log(err.response.data.detail);
        }
      }
      queryClient.invalidateQueries();
    },
  });
};
