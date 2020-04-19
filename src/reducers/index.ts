import { combineReducers, Reducer } from 'redux';
import { AuthUserAction } from '../actions/authUser';
import {
    AddQuestionAction,
    AnswerAction,
    ReceiveQuestionsAction,
} from '../actions/questions';
import { UsersAction } from '../actions/users';
import { Questions, Users } from '../utils/_DATA';
import { authUser, AuthUserState } from './authUser';
import { questions } from './questions';
import { users } from './users';

export type RootStateType = {
    authUser: AuthUserState;
    users: Users;
    questions: Questions;
};

export type RootStateActions =
    | AuthUserAction
    | UsersAction
    | ReceiveQuestionsAction
    | AddQuestionAction
    | AnswerAction;

export const rootReducer: Reducer<
    RootStateType,
    RootStateActions
> = combineReducers({
    authUser,
    users,
    questions,
});
