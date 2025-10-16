import {
  ADD_OFFRE,
  ADD_POSTE,
  GET_OFFRES,
  GET_SECTION,
  LOADING_PAGE,
  PRECHARGEMENT,
  UPDATE_OFFRE,
} from "./action.type.ts";
import { DataACTION, DataState } from "./type.ts";

function DataReducer(state: DataState, action: DataACTION): DataState {
  // Load Data
  switch (action.type) {
    case LOADING_PAGE:
      return {
        ...state,
        loading: true,
      };

    case PRECHARGEMENT:
      return {
        ...state,
        entreprise: action.payload.entreprise,
        user: action.payload.user,
        sections: action.payload.sections,
        poste: action.payload.postes,
        offres: action.payload.offres,
        loading: false,
      };
    case ADD_OFFRE:
      return {
        ...state,
        offres: [...(state.offres ?? []), action.payload.offre],
      };
    case ADD_POSTE:
      return {
        ...state,
        poste: [...(state.poste ?? []), action.payload.poste],
      };
    case GET_OFFRES:
      return {
        ...state,
        offres: action.payload.offres,
      };
    case GET_SECTION:
      return {
        ...state,
        sections: action.payload.sections,
      };
    case UPDATE_OFFRE:
      return {
        ...state,
        offres: state.offres.map((offre) => {
          if (offre.id === action.payload.offre.id) {
            return action.payload.offre;
          } else {
            return offre;
          }
        }),
      };
    default:
      return state;
  }
}

export default DataReducer;
