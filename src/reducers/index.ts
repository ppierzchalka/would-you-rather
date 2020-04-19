import { combineReducers } from 'redux';
import { authUser } from './authUser';
import { questions } from './questions';
import { users } from './users';

export default combineReducers({
    authUser,
    users,
    questions,
});
