type loginType = {
  email: string;
  password: string;
};

type UserView = {
  id: number;
  username: string;
  email: string;
  status_user: string;
  type_user: string;
};

type AuthState = {
  user: UserView | null;
  entreprise: Entreprise | null;
  access: string | null;
  refresh: string | null;
  isAuthenticated: boolean;
  isValidTokenAccess: boolean;
  setAuthenticated: (Auth: boolean) => void;
  setIsValidTokenAccess: (isValid: boolean) => void;
  setAuth: (
    user: UserView,
    access: string,
    refresh: string,
    entreprise: Entreprise,
  ) => void;
  clearAuth: () => void;
};

type ErrorType = {
  message?: string;
  status?: number;
};
type ErrorState = {
  utilisateur?: ErrorType | null;
  authentification?: ErrorType | null;
  login?: ErrorType | null;
  register?: ErrorType | null;
  setError: (state: Partial<ErrorState>) => void;
};

type Entreprise = {
  id: number;
  nom: string;
  email: string;
};

type Token = {
  access: string;
  refresh_token: string;
};

type LoginResponse = {
  user: UserView;
  access: string;
  refresh: string;
  entreprise: Entreprise;
};

type LoginPlayload = {
  email: string;
  password: string;
};

interface ErrorResponses {
  error: string;
  detail?: string;
}

type ErrResponse = {
  message: string;
  status: number;
};

type UserWrite = {
  username: string;
  email: string;
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
  access: string;
  refresh: string;
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
