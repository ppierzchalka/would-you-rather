import { Avatar, Button, Container, Divider, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { User } from '../../utils/_DATA';

const userData: User = {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: 'avatars/img24.png',
    answers: {
        '8xf0y6ziyjabvozdd253nd': 'optionOne',
        '6ni6ok3ym7mf1p33lnez': 'optionTwo',
        am8ehyc8byjqgar0jgpub9: 'optionTwo',
        loxhs1bqm25b708cmbf3g: 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
}

export const UserLogin: React.FC = () => {
    const [user, setUser] = useState<string>();

    const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        const value = e.target.value;
        setUser(value as string);
    }

    return (
        <Container maxWidth="sm" classes={{ root: 'user-login' }}>
            <Paper variant="outlined" elevation={3}>
                <div className="user-login__header-container">
                    <Typography variant="h1" display="block" classes={{ root: 'user-login__primary' }}>
                        Welcome to:
                        <span className="user-login__title">
                            Would <br />
                             You <br />
                             Rather? </span>
                         app!
                    </Typography>
                    <Typography variant="h3" display="block" classes={{ root: 'user-login__secondary' }}>
                        Please sign in to continue:
                    </Typography>
                </div>
                <Divider />
                <div className="user-login__body-container">
                    <FormControl variant="outlined" classes={{ root: 'user-login__select-wrapper' }}>
                        <InputLabel>Select User</InputLabel>
                        <Select
                            classes={{ select: 'user-login__select' }}
                            value={user}
                            onChange={handleChange}
                            label="Select User"
                        >
                            <MenuItem
                                value={userData.id}
                                classes={{ root: 'user-login__option' }}
                            >
                                <Avatar
                                    classes={{ root: 'user-login__avatar' }}
                                    alt={userData.name}
                                    src={userData.avatarURL}
                                />
                                {userData.name}
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        variant="contained"
                        color="primary"
                        classes={{
                            root: 'user-login__sign-in',
                            label: 'user-login__sign-in-label'
                        }}
                    >
                        Sign In
                    </Button>
                </div>
            </Paper>
        </Container>
    )
}
