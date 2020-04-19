import { Question, QuestionData } from './_DATA';

export const generateUID = (): string => {
    return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    );
}

export const formatQuestion = ({
    optionOneText,
    optionTwoText,
    author,
}: QuestionData): Question => {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        author,
        optionOne: {
            votes: [],
            text: optionOneText
        },
        optionTwo: {
            votes: [],
            text: optionTwoText
        }
    };
}
