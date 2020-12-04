// export const MemberReducer = (state, action) => {
//     switch(action.type){
//         case "INSERT" : 
//         case "UPDATE" : 
//         case "Delete" :
//         case "DETAILS" :
//     }
// }
import {
    UPDATE_MEMBER_ERROR,
    UPDATE_MEMBER_LOADING,
    UPDATE_MEMBER_SUCCESS,
    FETCH_MEMBER_ERROR,
    FETCH_MEMBER_LOADING,
    FETCH_MEMBER_SUCCESS,
    FETCH_BY_ID_MEMBER_ERROR,
    FETCH_BY_ID_MEMBER_LOADING,
    FETCH_BY_ID_MEMBER_SUCCESS,
    ADD_MEMBER_SUCCESS,
    ADD_MEMBER_ERROR,
    DELETE_MEMBER_SUCCESS,
    DELETE_MEMBER_ERROR
} from '../actions/types'

const defaultState = {
    members : [],
    error : null,
    isLoading: false
}

const MemberReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_MEMBER_LOADING : return {...state, isLoading: true };
        case FETCH_MEMBER_SUCCESS : return {...state, isLoading: false, members: action.payload, error: '' };
        case FETCH_MEMBER_ERROR : return { isLoading: false, members:[], error: action.payload};
        case UPDATE_MEMBER_SUCCESS : 
            const updateMembers = state.members.filter(member => member.id !== action.payload.id)
            return {...state, members: [...updateMembers, action.payload]};
        case UPDATE_MEMBER_ERROR : return {...state, error: action.payload};
        case  ADD_MEMBER_SUCCESS : return {...state, members: [ ...state.members, action.payload ]};
        case ADD_MEMBER_ERROR : return {...state, error: action.payload};
        default : return state;
        case DELETE_MEMBER_SUCCESS : 
            const filterMembers = state.members.filter( member => member.id !== action.payload.id);
            return {...state, members: filterMembers }
        case DELETE_MEMBER_ERROR : return {...state, error: action.payload}

    }
}

export default MemberReducer;

