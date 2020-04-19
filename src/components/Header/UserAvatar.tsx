import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import { User } from '../../utils/_DATA';

export type UserAvatarProps = {
    authUser?: User | null;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ authUser }) => {
    return (
        <div className={'app-bar__user app-bar__user-logged'}>
            <Avatar
            classes={{ root: 'app-bar__avatar' }}
                alt={authUser?.name ?? 'Guest'}
                src={authUser?.avatarURL ?? 'avatars/guest.png'}
            />
            <Typography
            variant="subtitle1"
            display="block"
            >
                Hello, {authUser?.name ?? 'Guest'}
            </Typography>
        </div>
    )
}
