import {
  ADD_OFFRE,
  ADD_POSTE,
  DELETE_OFFRE,
  GET_OFFRES,
  GET_SECTION,
  LOADING_PAGE,
  LOGOUT,
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

    case LOGOUT:
      return {
        ...state,
        user: [],
        entreprise: [],
        sections: [],
        poste: [],
        offres: [],
        loading: false,
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
            console.log(action.payload.offre.id);
            return action.payload.offre;
          } else {
            return offre;
          }
        }),
      };

    case DELETE_OFFRE:
      return {
        ...state,
        offres: state.offres.filter((offre) => offre.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export default DataReducer;
