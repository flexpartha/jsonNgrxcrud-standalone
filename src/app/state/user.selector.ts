import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { userState } from './user.state';

export const USER_STATE_NAME = 'Users';
const getUserState = createFeatureSelector<userState>(USER_STATE_NAME);

export const getUsers = createSelector(getUserState, (state) => {
  return state.userList;
});

export const getUserById = createSelector(
  getUserState,
  (state: userState, props: { id: string }) => {
    return state.userList.find((user) => user.id === Number(props.id));
  }
);
