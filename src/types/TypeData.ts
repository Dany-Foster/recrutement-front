type loginType = {
  email: string;
  password: string;
};

type UserView = {
  id: number;
  pseudo: string;
  email: string;
  status_user: string;
  type_user: string;
};

type AuthState = {
  user: UserView | null;
  entreprise: Entreprise | null;
  token: Token | null;
  isAuthenticated: boolean;
  setAuthenticated: (Auth: boolean) => void;
  setAuth: (user: UserView, token: Token, entreprise: Entreprise) => void;
  clearAuth: () => void;
};

type ErrorState = {
  err: string | null;
  setError: (err: string) => void;
};

type Entreprise = {
  id: number;
  nom: string;
  email: string;
};

type Token = {
  token: string;
  refresh_token: string;
};

type LoginResponse = {
  user: UserView;
  token: Token;
  entreprise: Entreprise;
};

type LoginPlayload = {
  mail: string;
  password: string;
};

interface ErrorResponses {
  error: string;
}

type ErrResponse = {
  message: string;
  status: number;
};

type UserWrite = {
  pseudo: string;
  mail: string;
  password: string;
  type_user: string;
};

type EntrepriseWrite = {
  nom: string;
  secteur: string;
  date_creation: string;
  adresse: string;
  email: string;
};

interface InscrResponse {
  user: UserView;
  token: Token;
  entreprise: Entreprise;
}

interface InscrPlayload {
  user: UserWrite;
  entreprise: EntrepriseWrite;
}

interface AuthentificationUser {
  user: UserView;
  entreprise: Entreprise;
}

export type {
  AuthentificationUser,
  AuthState,
  Entreprise,
  EntrepriseWrite,
  ErrorResponses,
  ErrorState,
  ErrResponse,
  InscrPlayload,
  InscrResponse,
  LoginPlayload,
  LoginResponse,
  loginType,
  Token,
  UserView,
};
