import { Avatar, Button, Container, Divider, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from '@material-ui/core';
import React, { Dispatch, useState } from 'react';
import { connect } from 'react-redux';
import { selectAuthUser } from '../../actions/authUser';
import { Users } from '../../utils/_DATA';

export type UserLoginInnerProps = {
    users: Users;
    authUser: string;
    dispatch: Dispatch<any>;
}

export const UserLoginInner: React.FC<UserLoginInnerProps> = ({ users, dispatch, authUser }) => {
    const [user, setUser] = useState<string | null>(authUser);

    const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        const value = e.target.value;
        setUser(value as string);
    }

    const onSignIn = () => {
        if (user) {
            dispatch(selectAuthUser(user));
        }
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
                            {Object.entries(users).map(([key, user]) => (
                                <MenuItem
                                    key={key}
                                    value={user.id}
                                    classes={{ root: 'user-login__option' }}
                                >
                                    <Avatar
                                        classes={{ root: 'user-login__avatar' }}
                                        alt={user.name}
                                        src={user.avatarURL}
                                    />
                                    {user.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button
                        onClick={onSignIn}
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

const mapStateToProps = (state: { users: Users; authUser: string; }) => ({
    users: state.users,
    authUser: state.authUser
})

export const UserLogin = connect(mapStateToProps)(UserLoginInner)
