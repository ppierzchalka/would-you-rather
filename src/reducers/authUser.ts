import { AuthUserAction, AuthUserActionType } from '../actions/authUser';

export type AuthUserState = string | null;
const defaultAuthUserState: AuthUserState = null;

export const authUser = (
           state: AuthUserState = defaultAuthUserState,
           action: AuthUserAction
       ) => {
           switch (action.type) {
               case AuthUserActionType.Select:
               case AuthUserActionType.Remove:
                   return action.id;
               default:
                   return state;
           }
       };
