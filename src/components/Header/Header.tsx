import { AppBar, Toolbar } from '@material-ui/core';
import { Create, ExitToApp, Home, List } from '@material-ui/icons';
import React from 'react';
import { User } from '../../utils/_DATA';
import { ButtonType, NavButton } from './NavButton';
import { UserAvatar } from './UserAvatar';

export type HeaderProps = {
    user?: User
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
    return (
        <AppBar position="static" classes={{ root: 'app-bar' }}>
            <Toolbar>
                <UserAvatar user={user} />
                {
                    user && <div className={'app-bar__menu'}>
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
                        onClick={console.log}
                        icon={<ExitToApp />}
                        label="Logout"
                    />
                    </div>
                }
            </Toolbar>
        </AppBar>
    )
}
