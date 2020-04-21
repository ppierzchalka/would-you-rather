import { Avatar, Button, Divider, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootStateType } from '../../reducers'

export type QuestionCardProps = {
    questionId: string;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ questionId }) => {
    const { question, author } = useSelector(
        ({ users, questions }: Partial<RootStateType>) => ({
            question: questions?.[questionId],
            author: questions && users?.[questions[questionId].author]
        })
    )

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
            <div className="question-card__body-container">
                <span className="question-card__answer">
                    {question?.optionOne.text}...
                </span>
                <Divider component="p" />
                <p className={'question-card__divider'}>
                    or
                </p>
                <span className="question-card__answer">
                    ...{question?.optionTwo.text}
                </span>
            </div>
            <Divider />
            <div className="question-card__button-container">
                <Link to={`/questions/${question?.id}`}>
                    <Button
                        variant="contained"
                        color="primary"
                        classes={{
                            root: 'question-card__button',
                            label: 'question-card__button-label'
                        }}
                    >
                        View question
                    </Button>
                </Link>
            </div>
        </Paper>
    )
}
