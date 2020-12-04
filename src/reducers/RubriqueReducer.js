
import {
    ADD_RUBRIQUE_ERROR, 
    ADD_RUBRIQUE_SUCCESS,
    UPDATE_RUBRIQUE_ERROR,
    UPDATE_RUBRIQUE_SUCCESS,
    DELETE_RUBRIQUE_ERROR,
    DELETE_RUBRIQUE_SUCCESS,
    FETCH_RUBRIQUE_ERROR,
    FETCH_RUBRIQUE_LOADING,
    FETCH_RUBRIQUE_SUCCESS,
} from '../actions/types'

const defaultState = {
    rubriques : [],
    error : null,
    isLoading: false
}

const RubriqueReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_RUBRIQUE_LOADING : return {...state, isLoading: true };
        case FETCH_RUBRIQUE_SUCCESS : return {...state, isLoading: false, rubriques: action.payload, error: '' };
        case FETCH_RUBRIQUE_ERROR : return { isLoading: false, rubriques:[], error: action.payload};
        case UPDATE_RUBRIQUE_SUCCESS : 
            const updaterubriques = state.rubriques.filter(rubrique => rubrique.id !== action.payload.id)
            return {...state, rubriques: [...updaterubriques, action.payload]};
        case UPDATE_RUBRIQUE_ERROR : return {...state, error: action.payload};
        case  ADD_RUBRIQUE_SUCCESS : return {...state, rubriques: [ ...state.rubriques, action.payload ]};
        case ADD_RUBRIQUE_ERROR : return {...state, error: action.payload};
        default : return state;
        case DELETE_RUBRIQUE_SUCCESS : 
            const filterRubriques = state.rubriques.filter( rubrique => rubrique.id !== action.payload.id);
            return {...state, rubriques: filterRubriques }
        case DELETE_RUBRIQUE_ERROR : return {...state, error: action.payload}

    }
}

export default RubriqueReducer;

