import { QuestionsAction, QuestionsActionType } from '../actions/questions';
import { UsersAction, UsersActionType } from '../actions/users';
import { Users } from '../utils/_DATA';

const initialUserState: Users = {};

export const users = (
    state: Users = initialUserState,
    action: UsersAction | QuestionsAction
) => {
    switch (action.type) {
        case UsersActionType.Receive:
            return {
                ...state,
                ...action.users,
            };
        case QuestionsActionType.SelectAnswer: {
            const { answer, qid, authedUser } = action.selectedAnswer;
            const user = state[authedUser];
            return {
                ...state,
                [authedUser]: {
                    ...user,
                    [qid]: answer,
                },
            };
        }
        case QuestionsActionType.RemoveAnswer: {
            const { qid, authedUser } = action.selectedAnswer;
            const user = state[authedUser];
            return {
                ...state,
                [authedUser]: {
                    ...user,
                    [qid]: undefined,
                },
            };
        }
        default:
            return state;
    }
};
