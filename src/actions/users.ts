import { Users } from '../utils/_DATA'
export enum UsersActionType {
    Receive = 'Receive',
}

export type UsersAction = {
    type: UsersActionType;
    users: Users;
};

export const receiveUsers = (users: Users): UsersAction => ({
           type: UsersActionType.Receive,
           users,
       });
