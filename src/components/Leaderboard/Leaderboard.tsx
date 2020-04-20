import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../reducers';
import { LeaderboardUserRow } from './LeaderboardUserRow';

export const Leaderboard: React.FC = () => {
    const usersData = useSelector((state: RootStateType) => state.users);
    const orderedUsers = useMemo(() => {
        return Object.values(usersData).sort((a, b) => {
            const totalScoreA = a.questions.length + Object.keys(a.answers).length;
            const totalScoreB = b.questions.length + Object.keys(b.answers).length;
            return totalScoreB - totalScoreA;
        })
    }, [usersData])

    return (
        <div className={'leaderboard__wrapper'}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Position</TableCell>
                            <TableCell align="center">User</TableCell>
                            <TableCell align="center">Questions answered</TableCell>
                            <TableCell align="center">Questions asked</TableCell>
                            <TableCell align="center">Total score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orderedUsers.map((user, index) => (
                            <LeaderboardUserRow key={user.id} user={user} place={index + 1} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    )
}
