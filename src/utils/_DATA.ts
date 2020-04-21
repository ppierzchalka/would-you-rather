import { formatQuestion } from './helpers';

export type User = {
    id: string;
    name: string;
    avatarURL: string;
    answers: Record<string, SelectedOption>;
    questions: string[];
};

export type Question = {
    id: string;
    author: string;
    timestamp: number;
    optionOne: Option;
    optionTwo: Option;
};

export type Users = Record<string, User>;
export type Questions = Record<string, Question>;

export type Option = {
    votes: string[];
    text: string;
};

export type SelectedOption = 'optionOne' | 'optionTwo';

export type QuestionData = {
    optionOneText: string;
    optionTwoText: string;
    author: string;
};

export type SelectedAnswer = {
    authedUser: string;
    qid: string;
    answer: SelectedOption;
};

let users: Users = {
    sarahedo: {
        id: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: '/avatars/img24.png',
        answers: {
            '8xf0y6ziyjabvozdd253nd': 'optionOne',
            '6ni6ok3ym7mf1p33lnez': 'optionTwo',
            am8ehyc8byjqgar0jgpub9: 'optionTwo',
            loxhs1bqm25b708cmbf3g: 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    tylermcginnis: {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        avatarURL: '/avatars/img27.png',
        answers: {
            vthrdm985a262al8qx3do: 'optionOne',
            xj352vofupe1dqz9emx13r: 'optionTwo'
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
    },
    johndoe: {
        id: 'johndoe',
        name: 'John Doe',
        avatarURL: '/avatars/img17.png',
        answers: {
            xj352vofupe1dqz9emx13r: 'optionOne',
            vthrdm985a262al8qx3do: 'optionTwo',
            '6ni6ok3ym7mf1p33lnez': 'optionTwo'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r']
    }
};

let questions: Questions = {
    '8xf0y6ziyjabvozdd253nd': {
        id: '8xf0y6ziyjabvozdd253nd',
        author: 'sarahedo',
        timestamp: 1467166872634,
        optionOne: {
            votes: ['sarahedo'],
            text: 'have horrible short term memory'
        },
        optionTwo: {
            votes: [],
            text: 'have horrible long term memory'
        }
    },
    '6ni6ok3ym7mf1p33lnez': {
        id: '6ni6ok3ym7mf1p33lnez',
        author: 'johndoe',
        timestamp: 1468479767190,
        optionOne: {
            votes: [],
            text: 'become a superhero'
        },
        optionTwo: {
            votes: ['johndoe', 'sarahedo'],
            text: 'become a supervillain'
        }
    },
    am8ehyc8byjqgar0jgpub9: {
        id: 'am8ehyc8byjqgar0jgpub9',
        author: 'sarahedo',
        timestamp: 1488579767190,
        optionOne: {
            votes: [],
            text: 'be telekinetic'
        },
        optionTwo: {
            votes: ['sarahedo'],
            text: 'be telepathic'
        }
    },
    loxhs1bqm25b708cmbf3g: {
        id: 'loxhs1bqm25b708cmbf3g',
        author: 'tylermcginnis',
        timestamp: 1482579767190,
        optionOne: {
            votes: [],
            text: 'be a front-end developer'
        },
        optionTwo: {
            votes: ['sarahedo'],
            text: 'be a back-end developer'
        }
    },
    vthrdm985a262al8qx3do: {
        id: 'vthrdm985a262al8qx3do',
        author: 'tylermcginnis',
        timestamp: 1489579767190,
        optionOne: {
            votes: ['tylermcginnis'],
            text: 'find $50 yourself'
        },
        optionTwo: {
            votes: ['johndoe'],
            text: 'have your best friend find $500'
        }
    },
    xj352vofupe1dqz9emx13r: {
        id: 'xj352vofupe1dqz9emx13r',
        author: 'johndoe',
        timestamp: 1493579767190,
        optionOne: {
            votes: ['johndoe'],
            text: 'write JavaScript'
        },
        optionTwo: {
            votes: ['tylermcginnis'],
            text: 'write Swift'
        }
    }
};

export function _getUsers(): Promise<Users> {
    return new Promise((res, _rej) => {
        setTimeout(() => res({ ...users }), 1000);
    });
}

export function _getQuestions(): Promise<Questions> {
    return new Promise((res, _rej) => {
        setTimeout(() => res({ ...questions }), 1000);
    });
}

export function _saveQuestion(question: QuestionData): Promise<Question> {
    return new Promise((res, _rej) => {
        const authedUser = question.author;
        const formattedQuestion = formatQuestion(question);

        setTimeout(() => {
            questions = {
                ...questions,
                [formattedQuestion.id]: formattedQuestion
            };

            users = {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    questions: users[authedUser].questions.concat([
                        formattedQuestion.id
                    ])
                }
            };

            res(formattedQuestion);
        }, 1000);
    });
}

export function _saveQuestionAnswer({
    authedUser,
    qid,
    answer
}: SelectedAnswer): Promise<never> {
    return new Promise((res, _rej) => {
        setTimeout(() => {
            users = {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    answers: {
                        ...users[authedUser].answers,
                        [qid]: answer
                    }
                }
            };
            questions = {
                ...questions,
                [qid]: {
                    ...questions[qid],
                    [answer]: {
                        ...questions[qid][answer],
                        votes: questions[qid][answer].votes.concat([
                            authedUser
                        ])
                    }
                }
            };
            res();
        }, 500);
    });
}
