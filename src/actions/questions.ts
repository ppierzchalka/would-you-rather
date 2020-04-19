// tslint:disable: no-console
import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import {
    Question,
    QuestionData,
    Questions,
    SelectedAnswer,
} from '../utils/_DATA';

export enum QuestionsActionType {
    ReceiveQuestions = 'ReceiveQuestions',
    AddQuestion = 'AddQuestion',
    SelectAnswer = 'SelectAnswer',
    RemoveAnswer = 'RemoveAnswer',
}

export type ReceiveQuestionsAction = {
    type: QuestionsActionType.ReceiveQuestions;
    questions: Questions;
};

export type AddQuestionAction = {
    type: QuestionsActionType.AddQuestion;
    question: Question;
};

export type AnswerAction = {
    type: QuestionsActionType.SelectAnswer | QuestionsActionType.RemoveAnswer;
    selectedAnswer: SelectedAnswer;
};

export type QuestionsAction =
    | ReceiveQuestionsAction
    | AddQuestionAction
    | AnswerAction;

const addQuestion = (question: Question): AddQuestionAction => ({
    type: QuestionsActionType.AddQuestion,
    question,
});

const selectAnswer = (selectedAnswer: SelectedAnswer): AnswerAction => ({
    type: QuestionsActionType.SelectAnswer,
    selectedAnswer,
});

const removeAnswer = (selectedAnswer: SelectedAnswer): AnswerAction => ({
    type: QuestionsActionType.RemoveAnswer,
    selectedAnswer,
});

export const receiveQuestions = (
    questions: Questions
): ReceiveQuestionsAction => ({
    type: QuestionsActionType.ReceiveQuestions,
    questions,
});

export const handleAddQuestion = (
    questionData: Omit<QuestionData, 'author'>
) => (
    dispatch: (arg0: AddQuestionAction) => any,
    getState: () => { (): any; new (): any; authUser: string }
) => {
    saveQuestion({
        ...questionData,
        author: getState().authUser,
    })
        .then((q) => dispatch(addQuestion(q)))
        .catch((e) => console.error('Error in handleAddQuestion:', e));
};

export const handleSelectAnswer = (
    selectedAnswer: Omit<SelectedAnswer, 'authedUser'>
) => (
    dispatch: (arg0: {
        type: QuestionsActionType;
        selectedAnswer: SelectedAnswer;
    }) => void,
    getState: () => { authUser: string }
) => {
    const { authUser } = getState();
    const preparedAnswer = {
        ...selectedAnswer,
        authedUser: authUser,
    };

    dispatch(selectAnswer(preparedAnswer));
    return saveQuestionAnswer(preparedAnswer).catch((e) => {
        console.error('Error in selectAnswer:', e);
        dispatch(removeAnswer(preparedAnswer));
        alert('There was an error while selecting answer');
    });
};
