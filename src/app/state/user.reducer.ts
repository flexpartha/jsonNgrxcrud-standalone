import { createReducer, on } from '@ngrx/store';
import { initialState } from './user.state';
import {
  addUser,
  deleteUser,
  loadUsersSuccess,
  updateUsers,
  updateUsersSuccess,
} from './user.action';

const _userReducer = createReducer(
  initialState,
  on(addUser, (state, action) => {
    let addUser = { ...action.user };
    addUser.id = state.userList.length + 1;

    return {
      ...state,
      userList: [...state.userList, addUser],
    };
  }),
  on(updateUsers, (state, action) => {
    const updateduser = state.userList.map((user: any) => {
      return action.user.id === user.id ? action.user : user;
    });
    return {
      ...state,
      userList: updateduser,
    };
  }),

  on(deleteUser, (state, action) => {
    return {
      ...state,
      userList: state.userList.filter((user) => user.id !== action.id),
    };
  }),

  on(loadUsersSuccess, (state, action) => {
    return {
      ...state,
      userList: action.user,
    };
  })
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
