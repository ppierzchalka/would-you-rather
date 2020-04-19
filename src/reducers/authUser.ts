import { AuthUserAction, AuthUserActionType } from '../actions/authUser';

export const authUser = (state = null, action: AuthUserAction) => {
    switch (action.type) {
        case AuthUserActionType.Select:
        case AuthUserActionType.Remove:
            return action.id;
        default:
            return state;
    }
}
