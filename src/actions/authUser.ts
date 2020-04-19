export enum AuthUserActionType {
    Select = 'Select',
    Remove = 'Remove',
}

export type AuthUserAction = {
    type: AuthUserActionType;
    id: string | null;
};

export const selectAuthUser = (id: string): AuthUserAction => ({
    type: AuthUserActionType.Select,
    id,
});

export const removeAuthUser = (): AuthUserAction => ({
    type: AuthUserActionType.Remove,
    id: null
})
