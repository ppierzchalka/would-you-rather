import { Button, Divider, Paper, TextField, Typography } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../../actions/questions';

enum InputTarget {
    First = 'First',
    Second = 'Second',
}

export const NewQuestion: React.FC = () => {
    const dispatch = useDispatch();
    const [toHome, setToHome] = useState<boolean>(false);
    const [firstOption, setFirstOption] = useState<string>('');
    const [secondOption, setSecondOption] = useState<string>('');

    const handleSetValue = useCallback((e: React.ChangeEvent<{ value: string }>, target: InputTarget) => {
        const value = e.target.value;
        switch (target) {
            case InputTarget.First:
                setFirstOption(value);
                break;
            case InputTarget.Second:
                setSecondOption(value);
                break;
        }
    }, [setFirstOption, setSecondOption])

    const handleSubmit = useCallback(() => {
        if (firstOption !== '' && secondOption !== '') {
            dispatch(handleAddQuestion({
                optionOneText: firstOption,
                optionTwoText: secondOption
            }))
            setToHome(true);
        }
    }, [firstOption, secondOption, dispatch])

    if (toHome) {
        return (
            <Redirect to="/" />
        )
    }
    return (
        <Paper variant="outlined" elevation={3}>
            <div className="question-form__header-container">
                <Typography variant="h1" display="block" classes={{ root: 'question-form__header' }}>
                    Ask a new question
                </Typography>
            </div>
            <Divider />
            <div className="question-form__question-container">
                <Typography variant="h1" display="block" classes={{ root: 'question-form__question' }}>
                    Would You Rather?
                </Typography>
            </div>
            <Divider />
            <div className="question-form__body">
                <div className="question-form__inputs">
                    <TextField
                        label="Option one"
                        variant="outlined"
                        onChange={(e) => handleSetValue(e, InputTarget.First)}
                    />
                    <Divider component="p" />
                    <p className={'question-form__divider'}>
                        <Typography
                            color="textSecondary"
                            display="block"
                            variant="caption"
                        >
                            or
                    </Typography>
                    </p>
                    <TextField
                        label="Option two"
                        variant="outlined"
                        onChange={(e) => handleSetValue(e, InputTarget.Second)}
                    />
                </div>
                <Button
                    classes={{
                        root: 'question-form__submit',
                        label: 'question-form__submit-label'
                    }}
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={firstOption === '' || secondOption === ''}
                >
                    Submit
                </Button>
            </div>
        </Paper>
    )
}
