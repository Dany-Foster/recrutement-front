export interface DataCandidat {
  file: File | null;
  user: string | null;
  offre_id: string | null;
}

export interface DataUtilisateur {
  name: string;
  email: string;
  password: string;
  contacts: Contacts[];
  role: string | null;
  entreprise_id: string | null;
  password_confirmation: string | null;
}

export interface Contacts {
  contact: string | null;
}

export interface DataOffre {
  titre: string | null;
  desc_ofr: string | null;
  date_pub?: string | null;
  date_clot?: string | null;
  temps_Tr: string | null;
  Annee_Exp: string | null;
  contrat: string | null;
  entreprise_id: string | null;
  poste_id: string | null;
  user_id: string | null;
}
