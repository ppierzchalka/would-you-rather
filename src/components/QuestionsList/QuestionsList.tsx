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
    answered: Question[],
    unanswered: Question[]
};

export type QuestionsListProps = {
    questions: Question[];
}

export const QuestionsList: React.FC<QuestionsListProps> = ({ questions }) => {
    return (
        <React.Fragment>
            {questions.length === 0 && <p>No questions to answer...</p>}
            <List>
                {questions.map(question => (
                    <ListItem key={question.id}>
                        <QuestionCard questionId={question.id} />
                    </ListItem>
                ))}
            </List>
        </React.Fragment>
    )
}

const buildMapStateToProps = (questionsState: QuestionsState) => (state: { questions: Questions, authUser: string }) => {
    const { answered, unanswered } = Object.values(state.questions).reduce(
        (acc: PartitionedQuestions, question: Question) => {
            const { optionOne, optionTwo } = question;
            if (optionOne.votes.includes(state.authUser) || optionTwo.votes.includes(state.authUser)) {
                return ({
                    ...acc,
                    answered: [
                        ...acc.answered,
                        question
                    ]
                })
            }
            return ({
                ...acc,
                unanswered: [
                    ...acc.unanswered,
                    question
                ]
            });
        }, { answered: [], unanswered: [] }
    )

    switch (questionsState) {
        case QuestionsState.Answered:
            return {
                questions: answered.sort((a, b) => (b.timestamp - a.timestamp))
            }
        case QuestionsState.Unanswered:
            return {
                questions: unanswered.sort((a, b) => (b.timestamp - a.timestamp))
            }
    }
}

export const AnsweredQuestions = connect(buildMapStateToProps(QuestionsState.Answered))(QuestionsList);
export const UnansweredQuestions = connect(buildMapStateToProps(QuestionsState.Unanswered))(QuestionsList);
