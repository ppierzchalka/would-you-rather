import { Avatar, Button, Divider, Paper, Typography } from '@material-ui/core';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { handleSelectAnswer } from '../../actions/questions';
import { RootStateType } from '../../reducers';
import { SelectedOption } from '../../utils/_DATA';

export const QuestionPoll: React.FC = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { question, author, user } = useSelector(
        ({ users, questions, authUser }: Partial<RootStateType>) => {
            const question = questions && id ? questions[id] : null;
            const author = question && users ? users[question.author] : null
            return {
                question,
                author,
                user: authUser
            }
        }
    )

    const handleAnswer = useCallback((selectedOption: SelectedOption) => {
        if (question) {
            const { id } = question;
            dispatch(handleSelectAnswer({
                qid: id,
                answer: selectedOption
            }))
        }
    }, [question, dispatch])

    if (!question || !user) {
        return <p>No question found...</p>
    }

    const renderPoll = () => {
        const { optionOne, optionTwo } = question;
        const isAnswered = optionOne.votes.includes(user) || optionTwo.votes.includes(user);
        const totalAnswers = optionOne.votes.length + optionTwo.votes.length;
        const optionOnePercentage = (optionOne.votes.length / totalAnswers * 100).toFixed(2);
        const optionTwoPercentage = (optionTwo.votes.length / totalAnswers * 100).toFixed(2);

        if (isAnswered) {
            return (
                <div className="question-card__body-container">
                    <div className="question-card__results-container">
                        <div className="question-card__option-results">
                            <p>{optionOne.text}</p>
                            <Typography variant="body1" display="block" classes={{ root: 'question-card__results-percentage' }}>
                                {optionOnePercentage}%
                            </Typography>
                        </div>
                        <div className="question-card__option-results">
                            <p>{optionTwo.text}</p>
                            <Typography variant="body1" display="block" classes={{ root: 'question-card__results-percentage' }}>
                                {optionTwoPercentage}%
                            </Typography>
                        </div>
                    </div>
            </div>
            )
        }
        return (
            <div className="question-card__body-container question-card__body-container--poll">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAnswer('optionOne')}
                    classes={{
                        root: 'question-card__button',
                        label: 'question-card__button-label'
                    }}
                >
                    {optionOne.text}...
                        </Button>
                <Divider component="p" />
                <p className={'question-card__divider'}>
                    or
                        </p>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAnswer('optionTwo')}
                    classes={{
                        root: 'question-card__button',
                        label: 'question-card__button-label'
                    }}
                >
                    ...{optionTwo.text}
                </Button>
            </div>
        )
    }

    return (
        <Paper variant="outlined" elevation={3} classes={{ root: 'question-card__container' }}>
            <div className="question-card__header-container">
                <Avatar
                    classes={{ root: 'leaderboard-table__avatar' }}
                    alt={author?.name}
                    src={author?.avatarURL}
                />
                <Typography variant="h5" display="block">
                    {author?.name} asks:
                    </Typography>
            </div>
            <Typography variant="body1" display="block" classes={{ root: 'question-form__question' }}>
                Would You Rather?
                    </Typography>
            <Divider />
                {renderPoll()}
        </Paper>
    )
}
