import {combineReducers } from 'redux'
import MemberReducer from './MemberReducer'
import RubriqueReducer from './RubriqueReducer'

export default combineReducers ({
    memberData : MemberReducer,
    rubriqueData : RubriqueReducer,
});
