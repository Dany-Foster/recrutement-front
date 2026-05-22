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
    mutationFn: async ({ mail, password }) =>
      await api.post("api/login/", { mail, password }),
    onSuccess: ({ user, token, entreprise }: LoginResponse) => {
      useAuthStore.getState().setAuth(user, token, entreprise);
      useAuthStore.setState({
        isAuthenticated: true,
      });
      queryClient.invalidateQueries();
    },
    onError: (err) => {
      if (err.response) {
        useErrorManagement.getState().setError(err.response.data.error);
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
    onSuccess: ({ user, token, entreprise }: InscrResponse) => {
      useAuthStore.getState().setAuth(user, token, entreprise);
      useAuthStore.setState({
        isAuthenticated: true,
      });
      queryClient.invalidateQueries();
    },
    onError: (err) => {
      if (err.response) {
        console.log(err.response);
        useErrorManagement.getState().setError(err.response.data.error);
      }
      queryClient.invalidateQueries();
    },
  });
};

export const useMe = () => {
  const queryClient = useQueryClient();
  const access_token = useAuthStore.getState().token?.access;
  const { mutate } = useRefreshToken();
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
        mutate();
      }
      queryClient.invalidateQueries();
    },
  });
};

export const useRefreshToken = () => {
  const queryClient = useQueryClient();
  const refresh_token = useAuthStore.getState().token?.refresh_token;
  return useMutation<void, AxiosError<ErrorResponses>, void>({
    mutationFn: async () =>
      await api.post(
        "api/token/verify/",
        refresh_token ? { token: refresh_token } : { token: "no_token" },
      ),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (err) => {
      if (err.response?.status === 401) {
        useAuthStore.getState().clearAuth();
      }
      queryClient.invalidateQueries();
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const refresh_token = useAuthStore.getState().token?.refresh_token;
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
        useErrorManagement.getState().setError(err.response.data.error);
      }
      queryClient.invalidateQueries();
    },
  });
};
