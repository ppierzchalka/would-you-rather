import {
    QuestionData,
    Questions,
    SelectedAnswer,
    Users,
    _getQuestions,
    _getUsers,
    _saveQuestion,
    _saveQuestionAnswer,
} from './_DATA';

export const getInitialData = (): Promise<{
    users: Users;
    questions: Questions;
}> => {
    return Promise.all([_getUsers(), _getQuestions()]).then(
        ([users, questions]) => ({
            users,
            questions,
        })
    );
};

export const saveQuestion = (questionData: QuestionData) => {
    return _saveQuestion(questionData);
};

export const saveQuestionAnswer = (selectedAnswer: SelectedAnswer) => {
    return _saveQuestionAnswer(selectedAnswer);
};
