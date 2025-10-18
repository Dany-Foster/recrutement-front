// types.ts
export const initialState: DataState = {
  user: [],
  entreprise: [],
  candidats: [],
  offres: [],
  entretiens: [],
  sections: [],
  poste: [],
  errors: [],
  loading: false,
};
// L’état du reducer
export interface DataState {
  user: User | [];
  entreprise: Entreprise | [];
  candidats: Candidats[] | [];
  offres: Offres[] | [];
  entretiens?: [];
  sections: Sections[] | [];
  poste: Poste[] | [];
  errors?: [];
  loading?: boolean;
}

// Exemple de type User
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  token: string;
  mdp?: string;
  confMdp?: string;
}

export interface Entreprise {
  id: string;
  nom: string;
  email: string;
  adresse: string;
}

export interface Candidats {
  id: number;
  nom: string;
  prenom: string;
  profil: string;
  email: string;
  Annee: string;
  CV: string;
  Exp: Experiences[];
}

export interface Experiences {
  poste: string;
  entreprise: string;
  date_debut: string;
  date_fin: string;
  missions: Missions[];
  competences: Competences[];
  formations: Formations[];
}

export interface Missions {
  titre?: string;
  tache: string[];
}

export interface Competences {
  competence: string;
  categorie?: string;
  niveau?: string;
}

export interface Formations {
  Etablissement: string;
  Diplome: string;
  Date?: string;
}

export interface Langue {
  langue?: string;
  niveau?: string;
}

export interface Offres {
  id?: string;
  titre?: string;
  desc_ofr?: string;
  date_pub?: string;
  date_clot?: string;
  temps?: string;
  Annee_Exp?: string;
  contrat?: string;
  criteres?: criteres[];
  user?: user;
  poste?: Poste;
}

export interface criteres {
  id?: string;
  section: Sections;
  critere: string[];
}

export interface user {
  id: string;
  name: string;
  role: string;
}

export interface Sections {
  id: string;
  section: string;
}

export interface Poste {
  id: string;
  poste: string;
  desc_post: string;
}

// Les actions possibles
export type DataACTION =
  | { type: "loading" }
  | {
      type: "Prechargement Data";
      payload: {
        user: User;
        entreprise: Entreprise;
        sections: Sections[];
        postes: Poste[];
        offres: Offres[];
      };
    }
  | { type: "LOGOUT" }
  | { type: "ENTREPRISE"; payload: { entreprise: Entreprise } }
  | { type: "ADD_OFFRE"; payload: { offre: Offres } }
  | { type: "GET_OFFRES"; payload: { offres: Offres[] } }
  | { type: "GET_SECTION"; payload: { sections: Sections[] } }
  | { type: "ADD_POSTE"; payload: { poste: Poste } }
  | { type: "UPDATE_OFFRE"; payload: { offre: Offres } }
  | { type: "DELETE_OFFRE"; payload: { id: string } };
