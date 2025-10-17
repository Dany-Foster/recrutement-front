import axios from "axios";
import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { Navigate } from "react-router-dom";
import { DeleteOffre, UpdateOffre } from "../API/Donnees/Offres.ts";
import Get_Data from "../API/Donnees/Prechargement.ts";
import { LOGOUT } from "../API/logout.ts";
import DataReducer from "./Data.reducer.ts";
import PageTransition from "./PageTransition.tsx";
import { DataACTION, DataState, initialState, Offres } from "./type.ts";
// import { UpdateOffre } from "../API/Donnees/Offres.ts";

export interface AuthContextType {
  data: DataState;
  dispatch: {
    (action: DataACTION): void;
  };
  section?: () => void;
  selectOffre: Offres | null;
  setSelectOffre: React.Dispatch<React.SetStateAction<Offres | null>>;
  HandleUpdateOffre: () => void;
  HandleDeleteOffre: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  data: initialState,
  dispatch: () => {},
  selectOffre: null,
  setSelectOffre: () => {},
  HandleUpdateOffre: () => {},
  HandleDeleteOffre: () => {},
  logout: () => {},
});

export default AuthContext;

function AuthentificationProvider({ children }: { children: React.ReactNode }) {
  const [Authenticate, setAuthenticate] = useState(true);
  // const navigate = useNavigate();
  const [data, dispatch] = useReducer<React.Reducer<DataState, DataACTION>>(
    DataReducer,
    initialState
  );
  const [selectOffre, setSelectOffre] = useState<Offres | null>(null);

  const logout = () => {
    dispatch({ type: "loading" });
    localStorage.removeItem("auth_id");
    localStorage.removeItem("auth_name");
    localStorage.removeItem("auth_mail");
    localStorage.removeItem("auth_role");
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_Entreprise");
    LOGOUT(data.user?.id)
      .then((res) => {
        if (res.status == 200) {
          setAuthenticate(false);
          dispatch({ type: "LOGOUT" });
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch({ type: "LOGOUT" });
    setAuthenticate(false);
  };

  const HandleDeleteOffre = () => {
    if (selectOffre) {
      DeleteOffre(selectOffre.id || "")
        .then((res: boolean | unknown) => {
          if (res) {
            dispatch({ type: "DELETE_OFFRE", payload: { id: selectOffre.id } });
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const HandleUpdateOffre = (handleChange?: () => void) => {
    if (selectOffre) {
      const dataState = {
        titre: selectOffre.titre || "",
        desc_ofr: selectOffre.desc_ofr || "",
        date_clot: selectOffre.date_clot || "",
        temps_Tr: selectOffre.temps || "",
        Annee_Exp: selectOffre.Annee_Exp || "",
        contrat: selectOffre.contrat || "",
        entreprise_id:
          (data.entreprise !== undefined && data.entreprise.id) || "",
        poste_id: (selectOffre.poste && selectOffre.poste.id) || "",
        user_id: (selectOffre.user && selectOffre.user.id) || "",
        critere: selectOffre.criteres,
      };

      UpdateOffre(dataState, selectOffre.id || "")
        .then((res) => {
          if (res) {
            dispatch({
              type: "UPDATE_OFFRE",
              payload: { offre: selectOffre },
            });
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          if (handleChange) {
            handleChange();
          }
        });
    }
  };

  const user = useMemo(() => {
    return {
      id: localStorage.getItem("auth_id") || "",
      name: localStorage.getItem("auth_name") || "",
      email: localStorage.getItem("auth_mail") || "",
      role: localStorage.getItem("auth_role") || "",
      token: localStorage.getItem("auth_token") || "",
    };
  }, []);
  const entreprise = useMemo(() => localStorage.getItem("auth_Entreprise"), []);

  useEffect(() => {
    dispatch({ type: "loading" });
    const response = async () => {
      await axios
        .get("/api/admin/authenticate")
        .then((res) => {
          if (res.status == 200) {
            if (entreprise !== null) {
              const entr = JSON.parse(entreprise);
              const result = () => {
                Get_Data().then((res) => {
                  dispatch({
                    type: "Prechargement Data",
                    payload: {
                      user,
                      entreprise: entr,
                      sections: res.sections,
                      postes: res.postes,
                      offres: res.offres,
                    },
                  });
                });
              };
              result();
            } else {
              setAuthenticate(false);
            }
          }
        })
        .catch((err) => {
          console.log(err.message);
          setAuthenticate(false);
        });
    };
    response();
  }, [entreprise, user, Authenticate]);

  return (
    <PageTransition loading={data.loading}>
      {Authenticate ? (
        <AuthContext.Provider
          value={{
            data,
            dispatch,
            selectOffre,
            setSelectOffre,
            HandleUpdateOffre,
            HandleDeleteOffre,
            logout,
          }}
        >
          {children}
        </AuthContext.Provider>
      ) : (
        <Navigate to="/" />
      )}
    </PageTransition>
  );
}

export { AuthentificationProvider };
