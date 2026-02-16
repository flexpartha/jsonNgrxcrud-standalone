import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { userState } from './user.state';

export const USER_STATE_NAME = 'Users';
const getUserState = createFeatureSelector<userState>(USER_STATE_NAME);

export const getUsers = createSelector(getUserState, (state) => {
  return state.userList;
});

export const getUserById = (id: string) => createSelector(
  getUserState,
  (state: userState) => {
    return state.userList.find((user) => user.id === Number(id));
  }
);
