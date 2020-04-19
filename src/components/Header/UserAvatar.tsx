import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import { User } from '../../utils/_DATA';

export type UserAvatarProps = {
    user?: User
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ user }) => {
    return (
        <div className={'app-bar__user app-bar__user-logged'}>
            <Avatar
            classes={{ root: 'app-bar__avatar' }}
            alt={user?.name ?? 'Guest'}
            src={user?.avatarURL ?? 'avatars/guest.png'}
            />
            <Typography
            variant="subtitle1"
            display="block"
            >
                Hello, {user?.name ?? 'Guest'}
            </Typography>
        </div>
    )
}
