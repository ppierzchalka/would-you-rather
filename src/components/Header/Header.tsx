import { AppBar, Toolbar } from '@material-ui/core';
import { Create, ExitToApp, Home, List } from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAuthUser } from '../../actions/authUser';
import { RootStateType } from '../../reducers';
import { ButtonType, NavButton } from './NavButton';
import { UserAvatar } from './UserAvatar';

export const Header: React.FC = () => {
    const dispatch = useDispatch();
    const authUserData = useSelector((state: RootStateType) => {
        const authUser = state.authUser;
        return authUser ? state.users[authUser] : null;
    });

    const handleLogout = () => dispatch(removeAuthUser());

    return (
        <AppBar position="sticky" classes={{ root: 'app-bar' }}>
            <Toolbar>
                <UserAvatar authUser={authUserData} />
                {
                    authUserData && <div className={'app-bar__menu'}>
                        <NavButton
                            type={ButtonType.Link}
                            path="/"
                            icon={<Home />}
                            label="Home"
                        />
                        <NavButton
                            type={ButtonType.Link}
                            path="/add"
                            icon={<Create />}
                            label="New Question"
                        />
                        <NavButton
                            type={ButtonType.Link}
                            path="/leaderboard"
                            icon={<List />}
                            label="Leader Board"
                        />
                        <NavButton
                            type={ButtonType.Action}
                            onClick={handleLogout}
                            icon={<ExitToApp />}
                            label="Logout"
                        />
                    </div>
                }
            </Toolbar>
        </AppBar>
    )
}
