import { List, ListItem } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Question, Questions } from '../../utils/_DATA';
import { QuestionCard } from './QuestionCard';

enum QuestionsState {
    Answered = 'Answered',
    Unanswered = 'Unanswered'
}

export type PartitionedQuestions = {
    answered: string[],
    unanswered: string[]
};

export type QuestionsListProps = {
    questions: string[];
}

export const QuestionsList: React.FC<QuestionsListProps> = ({ questions }) => {
    return (
        <React.Fragment>
            {questions.length === 0 && <p>No questions to answer...</p>}
            <List>
                {questions.map(question => (
                    <ListItem key={question}>
                        <QuestionCard questionId={question}/>
                    </ListItem>
                ))}
            </List>
        </React.Fragment>
    )
}

const buildMapStateToProps = (questionsState: QuestionsState) => (state: { questions: Questions, authUser: string }) => {
    const { answered, unanswered } = Object.entries(state.questions).reduce(
        (acc: PartitionedQuestions, [id, question]: [string, Question]) => {
            const { optionOne, optionTwo } = question;
            if (optionOne.votes.includes(state.authUser) || optionTwo.votes.includes(state.authUser)) {
                return ({
                    ...acc,
                    answered: [
                        ...acc.answered,
                        id
                    ]
                })
            }
            return ({
                ...acc,
                unanswered: [
                    ...acc.unanswered,
                    id
                ]
            });
        }, { answered: [], unanswered: [] }
    )

    switch (questionsState) {
        case QuestionsState.Answered:
            return {
                questions: answered
            }
        case QuestionsState.Unanswered:
            return {
                questions: unanswered
            }
    }
}

export const AnsweredQuestions = connect(buildMapStateToProps(QuestionsState.Answered))(QuestionsList);
export const UnansweredQuestions = connect(buildMapStateToProps(QuestionsState.Unanswered))(QuestionsList);
