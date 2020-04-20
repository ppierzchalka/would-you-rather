import { Avatar, TableCell, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import { User } from '../../utils/_DATA';

export type LeaderboardUserRowProps = {
    user: User;
    place: number;
}

export const LeaderboardUserRow: React.FC<LeaderboardUserRowProps> = ({
    user,
    place
}) => {
    return (
        <TableRow>
            <TableCell align="center">
                {place}
            </TableCell>
            <TableCell align="center">
                <div className="leaderboard-table__user-data">
                    <Avatar
                        classes={{ root: 'leaderboard-table__avatar' }}
                        alt={user.name}
                        src={user.avatarURL}
                    />
                    <Typography variant="h5" display="block">
                        {user.name}
                    </Typography>
                </div>
            </TableCell>
            <TableCell align="center">
                {Object.entries(user.answers).length}
            </TableCell>
            <TableCell align="center">
                {user.questions.length}
            </TableCell>
            <TableCell align="center">
                {Object.entries(user.answers).length + user.questions.length}
            </TableCell>
        </TableRow>
    )
}
