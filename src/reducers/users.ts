import { QuestionsAction, QuestionsActionType } from '../actions/questions';
import { UsersAction, UsersActionType } from '../actions/users';
import { Users } from '../utils/_DATA';

const initialUserState: Users = {};

export const users = (
    state: Users = initialUserState,
    action: UsersAction | QuestionsAction
): Users => {
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
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer,
                    },
                },
            };
        }
        case QuestionsActionType.RemoveAnswer: {
            const { qid, authedUser } = action.selectedAnswer;
            const user = state[authedUser];
            const { [qid]: toRemove, ...rest } = user.answers;
            return {
                ...state,
                [authedUser]: {
                    ...user,
                    answers: rest,
                },
            };
        }
        case QuestionsActionType.AddQuestion: {
            const { question } = action;
            const { author } = question;
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: [...state[author].questions, question.id]
                },
            };
        }
        default:
            return state;
    }
};
