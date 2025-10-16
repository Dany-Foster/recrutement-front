export interface DataCandidat {
  file: File | null;
  user: string | null;
  offre: string | null;
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
