import { getInitialData } from '../utils/api';
import { Questions, Users } from '../utils/_DATA';
import { QuestionsActionType, receiveQuestions } from './questions';
import { receiveUsers, UsersActionType } from './users';

export const handleInitialData = () => (
    dispatch: (arg0: {
        type: QuestionsActionType.ReceiveQuestions | UsersActionType;
        users?: Users;
        questions?: Questions;
    }) => void
) =>
    getInitialData().then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
    });
