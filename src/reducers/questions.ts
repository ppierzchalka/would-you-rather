import { QuestionsAction, QuestionsActionType } from '../actions/questions';
import { Questions } from '../utils/_DATA';

const initialQuestionsState: Questions = {};

export const questions = (
    state: Questions = initialQuestionsState,
    action: QuestionsAction
): Questions => {
    switch (action.type) {
        case QuestionsActionType.ReceiveQuestions:
            return {
                ...state,
                ...action.questions,
            };
        case QuestionsActionType.AddQuestion:
            return {
                ...state,
                [action.question.id]: action.question,
            };
        case QuestionsActionType.SelectAnswer: {
            const { qid, answer, authedUser } = action.selectedAnswer;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: [...state[qid][answer].votes, authedUser],
                    },
                },
            };
        }
        case QuestionsActionType.RemoveAnswer: {
            const { qid, answer, authedUser } = action.selectedAnswer;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.filter(
                            (id) => id !== authedUser
                        ),
                    },
                },
            };
        }
        default:
            return state;
    }
};
